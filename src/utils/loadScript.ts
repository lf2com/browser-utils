import fetchUrlText from './fetchUrlText';
import waitForPageLoaded from './waitForPageLoaded';

/**
 * Loads script.
 */
async function loadScript(src: string, loadRawText = false): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

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
