import Logger from '../Logger';
import fetchUrlText from '../utils/fetchUrlText';
import loadScript from '../utils/loadScript';
import waitForPageLoaded from '../utils/waitForPageLoaded';

const tsPath =
  'https://cdn.jsdelivr.net/gh/Microsoft/TypeScript@latest/lib/typescriptServices.js';
const logger = new Logger('[TS]');

logger.log(`Loading TypeScript: ${tsPath}`);
loadScript(tsPath)
  .then(waitForPageLoaded)
  .then(async () => {
    if (!('ts' in window)) {
      throw new ReferenceError('ts is not defined');
    }

    const ts = window.ts as object;

    if (!('transpile' in ts)) {
      throw new ReferenceError('ts.transpile is not defined');
    }

    const transpile = ts.transpile as (text: string) => string;
    const verifyTsDom = (dom: Element): dom is HTMLScriptElement => {
      if (!(dom instanceof HTMLScriptElement)) {
        return false;
      }

      const { src, type } = dom;

      if (src.length > 0) {
        if (!/\.ts$/i.test(src)) {
          return false;
        }
      } else if (type.length > 0) {
        if (!/^text\/typescript$/.test(type)) {
          return false;
        }
      } else {
        return false;
      }

      return true;
    };

    const doTs = async (tsScript: Element) => {
      if (!verifyTsDom(tsScript)) {
        return;
      }

      logger.log('Transpiling typescript');

      const { src } = tsScript;
      const tsText = (
        src.length > 0 ? await fetchUrlText(src) : tsScript.innerHTML
      ).trim();
      const jsText = transpile(tsText);
      const jsScript = document.createElement('script');

      jsScript.innerHTML = jsText;
      tsScript.replaceWith(jsScript);
      logger.info('Transpiled');
    };

    logger.info('Loaded TypeScript. Starting to transpile...');

    await Array.from(document.getElementsByTagName('script'))
      .filter(script => verifyTsDom(script))
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

    new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          doTs(node as Element);
        });
      });
    }).observe(document, {
      childList: true,
      subtree: true,
    });
  })
  .catch(error => {
    const detail = error?.message ?? 'Not found';

    logger.warn(`Loading TypeScript failed: ${detail}`);
  })
  .finally(() => {
    logger.log('End of TypeScript');
  });
