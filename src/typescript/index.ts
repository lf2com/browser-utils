import fetchText from '../utils/fetchText';
import loadScript from '../utils/loadScript';
import waitForPageLoaded from '../utils/waitForPageLoaded';

const TS_SERVICE_PATH =
  'https://cdn.jsdelivr.net/gh/Microsoft/TypeScript@latest/lib/typescriptServices.js';

interface GlobalWithTs {
  ts?: {
    transpile: (text: string) => string;
  };
}

(async () => {
  try {
    await loadScript(TS_SERVICE_PATH);
    await waitForPageLoaded();

    const transpile = (globalThis as GlobalWithTs).ts?.transpile;

    if (!transpile) {
      throw new ReferenceError('ts.transpile is not defined');
    }

    const handleScriptNode = async (script: HTMLScriptElement) => {
      const { src } = script;

      if (src && !/\.tsx?$/i.test(src)) {
        return;
      }

      const text = src ? await fetchText(src) : script.innerText;
      const code = transpile(text.trim());
      const node = document.createElement('script');

      if (script.type === 'module') {
        node.type = 'module';
      }

      node.innerText = code;
      script.replaceWith(node);
    };

    const scripts = Array.from(document.getElementsByTagName('script'));

    await Promise.allSettled(scripts.map(script => handleScriptNode(script)));

    new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node instanceof HTMLScriptElement) {
            handleScriptNode(node);
          }
        });
      });
    }).observe(document, {
      childList: true,
      subtree: true,
    });
  } catch (error) {
    // error
  }
})();
