import { router } from './router.js';

const loadApp = () => {
  router('home');
};
window.addEventListener('load', loadApp);
