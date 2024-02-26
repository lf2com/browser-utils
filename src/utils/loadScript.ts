import fetchText from './fetchText';

/**
 * Loads script
 */
const loadScript = async (
  source: string,
  loadRawText = false
): Promise<void> => {
  const src = /^\./.test(source)
    ? `${globalThis.location.href.replace(/\w+(\.\w+)?$/, '')}${source}`
    : source;
  const script = document.createElement('script');

  if (loadRawText) {
    const text = await fetchText(src);

    script.innerHTML = text;
    document.head.append(script);

    return;
  }

  return new Promise((resolve, reject) => {
    script.src = src;

    script.addEventListener('load', () => resolve());

    script.addEventListener('error', () => {
      script.remove();
      reject();
    });

    document.head.append(script);
  });
};

export default loadScript;
