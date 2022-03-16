/**
 * Waits until page is loaded.
 */
async function waitForPageLoaded(): Promise<void> {
  if (document.readyState === 'complete') {
    return;
  }

  await new Promise((resolve) => {
    window.addEventListener(
      'load',
      () => {
        resolve(undefined);
      },
      { once: true },
    );
  });
}
/**
 * Waits until DOM content is loaded.
 */
export async function waitForDOMContentLoaded(): Promise<void> {
  if (document.readyState === 'complete') {
    return;
  }

  await new Promise((resolve) => {
    window.addEventListener(
      'DOMContentLoaded',
      () => {
        resolve(undefined);
      },
      { once: true },
    );
  });
}

export default waitForPageLoaded;
