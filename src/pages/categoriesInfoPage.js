import { loadCategoriesData } from '../views/loadCategoriesData.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { loadLivePrice } from '../views/loadLivePrice.js';

export async function categoriesDataPage() {
  try {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
    const categoriesElement = loadCategoriesData();
    userInterface.appendChild(categoriesElement)
    const topPairs = ['btcusdt', 'ethusdt', 'bnbusdt', 'xrpusdt', 'adausdt'];
    topPairs.forEach(async (pair) => {
      const pairPrice = await loadLivePrice(pair);
      document.getElementById('top-five').appendChild(pairPrice);
    });
  } catch (error) {
    console.log(error);
  }
}
