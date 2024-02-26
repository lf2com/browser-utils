/**
 * Waits until page is loaded
 */
const waitForPageLoaded = async (): Promise<void> => {
  if (document.readyState === 'complete') {
    return;
  }

  return await new Promise<void>(resolve => {
    window.addEventListener('load', () => resolve(), { once: true });
  });
};

/**
 * Waits until DOM content is loaded
 */
export const waitForDOMContentLoaded = async (): Promise<void> => {
  if (document.readyState === 'complete') {
    return;
  }

  return new Promise(resolve => {
    window.addEventListener('DOMContentLoaded', () => resolve(), {
      once: true,
    });
  });
};

export default waitForPageLoaded;
