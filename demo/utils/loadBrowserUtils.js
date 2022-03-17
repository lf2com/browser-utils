/* eslint-disable no-console */
(async () => {
  const { currentScript } = document;
  const rootPath = currentScript.src.replace(/\w+\.\w+$/, '');
  const moduleNames = currentScript.getAttribute('module').split(/[|;,\s]/);
  const loadScript = async (src, modules) => new Promise((resolve, reject) => {
    const script = document.createElement('script');

    currentScript.getAttributeNames().forEach((name) => {
      script.setAttribute(name, currentScript.getAttribute(name));
    });
    script.src = src;
    script.setAttribute('module', modules.join(','));
    script.addEventListener('load', () => {
      currentScript.replaceWith(script);
      resolve();
    });
    script.addEventListener('error', () => {
      script.remove();
      reject();
    });
    document.head.append(script);
  });

  try {
    console.group('Loading browser utils');
    await loadScript(
      '/scriptLoader.js',
      moduleNames.map((name) => `/${name}`),
    );
    console.info('Development mode');
  } catch (e) {
    try {
      await loadScript(
        `${rootPath}../../dist/scriptLoader.js`,
        moduleNames.map((name) => `${rootPath}../../dist/${name}`),
      );
    } catch (err) {
      console.warn('Failed to load JS browser utils', err);
    }
  } finally {
    console.log('End of loading browser utils');
    console.groupEnd();
  }
})();
