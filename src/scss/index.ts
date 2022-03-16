import Logger from '../Logger';
import fetchUrlText from '../utils/fetchUrlText';
import loadScript from '../utils/loadScript';
import waitForPageLoaded from '../utils/waitForPageLoaded';

const sassPath = 'https://cdn.jsdelivr.net/gh/medialize/sass.js@latest/dist/sass.sync.js';
const logger = new Logger('[SS]');

logger.log(`Loading Sass: ${sassPath}`);
loadScript(sassPath)
  .then(waitForPageLoaded)
  .then(async () => {
    const { Sass } = window as any;

    if (!Sass) {
      throw new ReferenceError('Sass is not defined');
    }

    const { compile } = Sass;

    if (!compile) {
      throw new ReferenceError('sass.compile is not defined');
    }

    logger.info('Loaded Sass. Starting to compile...');

    await (Array.from(document.getElementsByTagName('style'))
      .filter((style) => (
        /^text\/scss$/.test(style.getAttribute('type') as string)
      ))
      .concat(
        Array.from(document.getElementsByTagName('link'))
          .filter((link) => /\.scss$/i.test(link.href)),
      ) as (HTMLStyleElement | HTMLLinkElement)[])
      .reduce(async (prevPromise, scssDom, scssDomIndex, scssDoms) => {
        await prevPromise;
        logger.log(`Compiling ${scssDomIndex + 1} / ${scssDoms.length}`);

        try {
          const scssText = (scssDom instanceof HTMLStyleElement
            ? scssDom.innerHTML
            : await fetchUrlText(scssDom.href)
          );

          await new Promise<void>((resolve) => {
            compile(scssText, (result: any) => {
              const { status } = result;

              if (status !== 0) {
                const { column, line, message } = result;

                throw new Error(`${message} @${line}:${column}`);
              }

              const { text } = result;
              const style = document.createElement('style');

              style.innerText = text;
              scssDom.replaceWith(style);
              resolve();
            });
          });
          logger.info('Compiled');
        } catch (error) {
          const { message } = error as Error;

          logger.warn(`Compiling failed: ${message}`);
        }
      }, Promise.resolve());
    logger.info('Compiled all styles');
  })
  .catch((error) => {
    const detail = error?.message ?? 'Not found';

    logger.warn(`Loading Sass failed: ${detail}`);
  })
  .finally(() => {
    logger.log('End of Sass');
  });
