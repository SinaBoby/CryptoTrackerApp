import { technicalPage } from './technicalPage.js';
import { categoriesDataPage } from './categoriesInfoPage.js';
import { createNavBar } from '../views/navBarView.js';
import { getTopCoinsData } from '../views/topCoinsData.js';
import { loadLivePrice } from '../views/loadLivePrice.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { router } from '../router.js';
import { marketDataPage } from './marketDataPage.js';

export async function homePage(userInterfaceElement) {
  try {
    userInterfaceElement.innerHTML = '';
    const navBar = createNavBar();
    document.getElementById('header').appendChild(navBar);
    const topCoinsTable = await getTopCoinsData();
    userInterfaceElement.appendChild(topCoinsTable);

    document
      .getElementById('logo')
      .addEventListener('click', async function () {
        document.getElementById('header').innerHTML = '';
        await homePage(userInterfaceElement);
      });
    document
      .getElementById('technical-page')
      .addEventListener('click', technicalPage);
    document
      .getElementById('categories-info-page')
      .addEventListener('click', categoriesDataPage);
      document.getElementById('market-page').addEventListener('click',marketDataPage)
  } catch (error) {
    console.log(error);
  }
}
