import { technicalPage } from './technicalPage.js';

import { createNavBar } from '../views/navBarView.js';
import { getTopCoinsData } from '../views/topCoinsData.js';
import { loadLivePrice } from '../views/loadLivePrice.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { router } from '../router.js';
export async function homePage(userInterfaceElement) {
  try {
    userInterfaceElement.innerHTML = '';
    const navBar = createNavBar();
    document.getElementById('header').appendChild(navBar);
    const topCoinsTable = await getTopCoinsData();
    userInterfaceElement.appendChild(topCoinsTable);

    const ethPrice = await loadLivePrice('ethusdt');
    document.getElementById(USER_INTERFACE_ID).appendChild(ethPrice);
    const btcPrice = await loadLivePrice('btcusdt');
    document.getElementById(USER_INTERFACE_ID).appendChild(btcPrice);
    document.getElementById('technical-page').addEventListener('click',technicalPage);
  } catch (error) {
    console.log(error);
  }
}


fetch('https://api.binance.com/api/v1/exchangeInfo')
  .then((response) => response.json())
  .then((data) => console.log(data));
