import Logger from '../Logger';
import loadScript from '../utils/loadScript';
import { waitForDOMContentLoaded } from '../utils/waitForPageLoaded';

const logger = new Logger('[SL]');
const currentScript = document.currentScript!;
const currentRoot = currentScript.getAttribute('src')?.replace(/\w+(\.\w+)?$/, '');
const loadEvent = currentScript.getAttribute('event:load') ?? 'scriptload';
const styleLoading = document.createElement('style');
const domLoading = document.createElement('div');
const idLoading = `loading_${Date.now()}`;
const setLoadingMessage = (message: string, progress?: number) => {
  domLoading.setAttribute('data-message', message);

  if (progress) {
    const percentage = Math.round(100 * progress);

    domLoading.style.setProperty('--progress', `${percentage}%`);
  }
};
const modules = (currentScript.getAttribute('module') ?? '')
  .split(/[|;,\s]/)
  .map((s) => s.trim())
  .filter((s) => s.length > 0);
const loadNextModule = async (index = 0) => {
  const module = modules[index];

  if (module) {
    const root = (/^~/.test(module)
      ? `${currentRoot}${module.replace(/^~\//, '')}`
      : module
    );
    const defaultPath = `${root}.js`;
    const progress = (index + 1) / modules.length;

    logger.log(`Loading script path: ${defaultPath}`);
    setLoadingMessage(`Loading module: ${module}`, progress);

    try {
      await loadScript(defaultPath);
    } catch (error) {
      const backupPath = `${root}/index.js`;

      logger.log(`Loading failed. Try to load script path: ${backupPath}`);

      try {
        await loadScript(backupPath);
        logger.info(`Loaded script: ${module}`);
      } catch (err) {
        logger.warn(`Loading failed. Script not found: ${module}`);
      }
    } finally {
      await loadNextModule(index + 1);
    }
  }
};

domLoading.id = idLoading;
styleLoading.innerHTML = `
  #${idLoading} ~ * {
    display: none;
  }
  #${idLoading} {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    color: #333;
    background-color: #fff;
    font-size: 13px;
    font-family: arial;
    font-weight: normal;
    line-height: 1.5em;
    display: grid;
    grid-template-rows: 1fr repeat(2, auto) 1fr;
    grid-template-areas: 'head' 'message' 'progress' 'tail';
    gap: 0.25em;
    align-items: center;
    justify-items: center;
  }
  #${idLoading}::before {
    content: attr(data-message);
    display: block;
    grid-area: message;
  }
  #${idLoading}::after {
    content: '';
    width: 20vw;
    height: 0.8em;
    box-sizing: border-box;
    border-radius: 0.5em;
    border: 1px solid #666;
    background-image: linear-gradient(90deg,
      #6c6 var(--progress),
      transparent var(--progress)
    );
    font-size: 0.5rem;
    display: block;
    grid-area: progress;
  }
`;
document.head.append(styleLoading);
waitForDOMContentLoaded()
  .then(() => {
    document.body.prepend(domLoading);
  });

async function onLoad() {
  logger.log('Loading modules');
  await loadNextModule();
  logger.info('Loaded all modules');
  setLoadingMessage('Loaded all modules', 1);
  setTimeout(() => {
    domLoading.remove();
    styleLoading.remove();
    window.dispatchEvent(new CustomEvent(loadEvent));
  }, 1000);
}

if (document.readyState === 'complete') {
  onLoad();
} else {
  window.addEventListener('load', onLoad);
}

(globalThis as any).loadScript = loadScript;
