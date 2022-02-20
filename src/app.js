import { router } from './router.js'

const loadApp = () => {
  router('home');
  console.log("hi")
};
window.addEventListener('load', loadApp);
