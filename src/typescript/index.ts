import Logger from '../Logger';
import fetchUrlText from '../utils/fetchUrlText';
import loadScript from '../utils/loadScript';
import waitForPageLoaded from '../utils/waitForPageLoaded';

const tsPath = 'https://cdn.jsdelivr.net/gh/Microsoft/TypeScript@latest/lib/typescriptServices.js';
const logger = new Logger('[TS]');

logger.log(`Loading TypeScript: ${tsPath}`);
loadScript(tsPath)
  .then(waitForPageLoaded)
  .then(async () => {
    const { ts } = window as any;

    if (!ts) {
      throw new ReferenceError('ts is not defined');
    }

    const { transpile } = ts;

    if (!transpile) {
      throw new ReferenceError('ts.transpile is not defined');
    }

    const doTs = async (tsScript: Element) => {
      if (!(tsScript instanceof HTMLScriptElement)) {
        return;
      }
      if (
        !/^text\/typescript$/.test(tsScript.type)
        && !/\.ts$/i.test(tsScript.src)
      ) {
        return;
      }

      logger.log('Transpiling typescript');

      const { src } = tsScript;
      const tsText = (src.length > 0
        ? await fetchUrlText(src)
        : tsScript.innerHTML
      )
        .trim();
      const jsText = transpile(tsText);
      const jsScript = document.createElement('script');

      jsScript.innerHTML = jsText;
      tsScript.replaceWith(jsScript);
      logger.info('Transpiled');
    };

    logger.info('Loaded TypeScript. Starting to transpile...');

    await Array.from(document.getElementsByTagName('script'))
      .filter((script) => (
        /^text\/typescript$/.test(script.type)
        || /\.ts$/i.test(script.src)
      ))
      .reduce(async (prevPromise, tsScript, tsIndex, tsScripts) => {
        await prevPromise;

        try {
          logger.log(`Transpiling ${tsIndex + 1} / ${tsScripts.length}`);
          doTs(tsScript);
        } catch (error) {
          const { message } = error as Error;

          logger.warn(`Transpiling failed: ${message}`);
        }
      }, Promise.resolve());
    logger.info('Transpiled all scripts');

    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          doTs(node as Element);
        });
      });
    })
      .observe(document, {
        childList: true,
        subtree: true,
      });
  })
  .catch((error) => {
    const detail = error?.message ?? 'Not found';

    logger.warn(`Loading TypeScript failed: ${detail}`);
  })
  .finally(() => {
    logger.log('End of TypeScript');
  });
