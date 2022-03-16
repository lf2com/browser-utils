/* eslint-disable no-console */
(() => {
  function doStuff(msg: string): void {
    const dom = document.createElement('div');

    dom.innerText = msg;
    document.body.append(dom);
  }

  doStuff('This code runs in TypeScript');
})();
