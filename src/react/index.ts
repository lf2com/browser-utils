import Logger from '../Logger';
import fetchUrlText from '../utils/fetchUrlText';
import loadScript from '../utils/loadScript';
import waitForPageLoaded from '../utils/waitForPageLoaded';

const reactPath = 'https://unpkg.com/react@17/umd/react.production.min.js';
const reactDomPath = 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js';
const babelPath = 'https://unpkg.com/@babel/standalone/babel.min.js';
const logger = new Logger('[RJ]');

logger.log('Loading React');
loadScript(reactPath)
  .then(() => Promise.all([
    loadScript(reactDomPath),
    loadScript(babelPath),
  ]))
  .then(waitForPageLoaded)
  .then(async () => {
    const { Babel } = window as any;

    if (!Babel) {
      throw new ReferenceError('Babel is not defined');
    }

    const { transform } = Babel;

    if (!transform) {
      throw new ReferenceError('Babel.transform is not defined');
    }

    logger.info('Loaded React. Starting to transforming...');

    await (
      Array.from(document.querySelectorAll('script[type="text/babel"]')) as HTMLScriptElement[]
    )
      .reduce(async (prevPromise, reactScript, reactIndex, reactScripts) => {
        await prevPromise;
        logger.log(`Transforming ${reactIndex + 1} / ${reactScripts.length}`);

        try {
          const { src } = reactScript;
          const reactText = (src.length > 0
            ? await fetchUrlText(src)
            : reactScript.innerHTML
          );
          const jsText = transform(reactText, {
            presets: ['env', 'react', 'typescript'],
            filename: '.tsx',
          }).code;
          const jsScript = document.createElement('script');

          jsScript.innerText = jsText;
          reactScript.replaceWith(jsScript);
          logger.info('Transpiled');
        } catch (error) {
          const { message } = error as Error;

          logger.warn(`Transforming failed: ${message}`);
        }
      }, Promise.resolve());
    logger.info('Transformed all scripts');
  })
  .catch((error) => {
    const detail = error?.message ?? 'Not found';

    logger.warn(`Loading React failed: ${detail}`);
  })
  .finally(() => {
    logger.log('End of React');
  });
