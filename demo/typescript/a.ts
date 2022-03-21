/* eslint-disable no-console */
(() => {
  type DoStuffProps = (msg: string) => void;

  const doStuff: DoStuffProps = (msg) => {
    const dom = document.createElement('div');

    dom.innerText = msg;
    document.body.append(dom);
  };

  doStuff('This code runs in <script src="*.ts">');
})();
