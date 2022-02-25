import { USER_INTERFACE_ID } from './constants.js';
import { homePage } from './pages/homePage.js';
export const router = (page) => {
  const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
  userInterfaceElement.innerHTML = '';
  switch (page) {
    case 'home':
      homePage(userInterfaceElement);
      break;
  }
};
