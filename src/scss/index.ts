import Logger from '../Logger';
import fetchUrlText from '../utils/fetchUrlText';
import loadScript from '../utils/loadScript';
import waitForPageLoaded from '../utils/waitForPageLoaded';

const sassPath =
  'https://cdn.jsdelivr.net/gh/medialize/sass.js@latest/dist/sass.sync.js';
const logger = new Logger('[SS]');

logger.log(`Loading Sass: ${sassPath}`);
loadScript(sassPath)
  .then(waitForPageLoaded)
  .then(async () => {
    if (!('Sass' in window)) {
      throw new ReferenceError('Sass is not defined');
    }

    const Sass = window.Sass as object;

    if (!('compile' in Sass)) {
      throw new ReferenceError('sass.compile is not defined');
    }

    const compile = Sass.compile as (
      text: string,
      callback: (result: {
        status: number;
        text: string;
        column: number;
        line: number;
        message: string;
      }) => void
    ) => void;
    
    const verifyScssDom = (
      dom: Element
    ): dom is HTMLLinkElement | HTMLStyleElement => {
      if (dom instanceof HTMLLinkElement) {
        return /\.scss$/i.test(dom.href);
      }

      if (dom instanceof HTMLStyleElement) {
        const type = dom.getAttribute('type') ?? '';

        return /^text\/scss$/.test(type);
      }

      return false;
    };

    const doScss = async (scssDom: Element) => {
      if (!verifyScssDom(scssDom)) {
        return;
      }

      logger.log('Compiling scss');

      const scssText = (
        scssDom instanceof HTMLStyleElement
          ? scssDom.innerHTML
          : await fetchUrlText(scssDom.getAttribute('href') as string)
      ).trim();

      if (scssText.length > 0) {
        await new Promise<void>(resolve => {
          compile(scssText, result => {
            const { status } = result;

            if (status !== 0) {
              const { column, line, message } = result;

              throw new Error(`${message} @${line}:${column}`);
            }

            const { text } = result;
            const style = document.createElement('style');

            style.innerHTML = text;
            scssDom.replaceWith(style);
            resolve();
          });
        });
      }

      logger.info('Compiled');
    };

    logger.info('Loaded Sass. Starting to compile...');

    await (
      Array.from(document.getElementsByTagName('style'))
        .filter(style => verifyScssDom(style))
        .concat(
          Array.from(document.getElementsByTagName('link')).filter(link =>
            /\.scss$/i.test(link.href)
          )
        ) as (HTMLStyleElement | HTMLLinkElement)[]
    ).reduce(async (prevPromise, scssDom, scssDomIndex, scssDoms) => {
      await prevPromise;

      try {
        logger.log(`Compiling ${scssDomIndex + 1} / ${scssDoms.length}`);
        doScss(scssDom);
      } catch (error) {
        const { message } = error as Error;

        logger.warn(`Compiling failed: ${message}`);
      }
    }, Promise.resolve());
    logger.info('Compiled all styles');

    new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          doScss(node as Element);
        });
      });
    }).observe(document, {
      childList: true,
      subtree: true,
    });
  })
  .catch(error => {
    const detail = error?.message ?? 'Not found';

    logger.warn(`Loading Sass failed: ${detail}`);
  })
  .finally(() => {
    logger.log('End of Sass');
  });
