import waitForPageLoaded from './waitForPageLoaded';

/**
 * Loads script.
 */
async function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = src;
    script.addEventListener('load', async () => {
      await waitForPageLoaded();
      resolve();
    });
    script.addEventListener('error', () => {
      reject();
    });
    document.head.append(script);
  });
}

export default loadScript;
