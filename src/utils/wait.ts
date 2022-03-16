/**
 * Waits for {ms} milliseconds.
 */
async function wait(ms = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default wait;
