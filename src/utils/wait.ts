/**
 * Waits for milliseconds
 */
const wait = async (ms = 0): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export default wait;
