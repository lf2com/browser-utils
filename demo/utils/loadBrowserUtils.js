/* eslint-disable no-console */
(async () => {
  const { currentScript } = document;
  const loadScript = async (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');

    currentScript.getAttributeNames().forEach((name) => {
      script.setAttribute(name, currentScript.getAttribute(name));
    });
    script.src = src;
    script.addEventListener('load', () => {
      currentScript.replaceWith(script);
      resolve();
    });
    script.addEventListener('error', reject);
    document.head.append(script);
  });

  try {
    console.group('Loading browser utils');
    await loadScript('/scriptLoader.js');
    console.info('Development mode');
  } catch (e) {
    try {
      await loadScript('../../dist/scriptLoader.js');
    } catch (err) {
      console.warn('Failed to load JS browser utils', err);
    }
  } finally {
    console.log('End of loading browser utils');
    console.groupEnd();
  }
})();
