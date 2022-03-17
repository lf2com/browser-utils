import fetchUrlText from './fetchUrlText';
import waitForPageLoaded from './waitForPageLoaded';

/**
 * Loads script.
 */
async function loadScript(source: string, loadRawText = false): Promise<void> {
  return new Promise((resolve, reject) => {
    const src = (/^\./.test(source)
      ? `${globalThis.location.href.replace(/\w+(\.\w+)?$/, '')}${source}`
      : source
    );
    const script = document.createElement('script');
    console.log(`\`- source: ${source}`);
    console.log(`\`- src: ${src}`);

    if (loadRawText) {
      fetchUrlText(src)
        .then((text) => {
          script.innerHTML = text;
          document.head.append(script);
        })
        .then(resolve)
        .catch(reject);
    } else {
      script.src = src;
      script.addEventListener('load', async () => {
        await waitForPageLoaded();
        resolve();
      });
      script.addEventListener('error', () => {
        script.remove();
        reject();
      });
      document.head.append(script);
    }
  });
}

export default loadScript;
