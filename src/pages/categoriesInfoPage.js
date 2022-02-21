import { loadCategoriesData } from '../views/loadCategoriesData.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { loadLivePrice } from '../views/loadLivePrice.js';
import {
  fetchCategoryInfo,
  loadCatList,
  printCatInfo,
} from '../views/loadCatList.js';

export async function categoriesDataPage() {
  try {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
    const categoriesElement = loadCategoriesData();
    userInterface.appendChild(categoriesElement);
    const topPairs = ['btcusdt', 'ethusdt', 'bnbusdt', 'xrpusdt', 'adausdt'];
    topPairs.forEach(async (pair) => {
      const pairPrice = await loadLivePrice(pair);
      document.getElementById('top-five').appendChild(pairPrice);
    });
    const catList = await loadCatList();
    console.log(catList);
    catList.forEach((category) => {
      const categoryName = document.createElement('option');
      categoryName.value = category.name;
      categoryName.textContent = category.name;
      document.getElementById('categories-list').appendChild(categoryName);
      console.log(category.name);
    });
    const categoryList = document
      .getElementById('categories-list')
      .addEventListener('change', showCatInfo);
    async function showCatInfo(e) {
      document.getElementById('cat-info-container').innerHTML = '';
      console.log(e.target.value);
      const category = e.target.value;
      const categoryInfo = await fetchCategoryInfo();
      const names = categoryInfo.map((cat) => cat.name);
      console.log(names);
      if (names.indexOf(category) > 0) {
        categoryInfo.forEach((cat) => {
          if (cat.name === category) {
            printCatInfo(cat);
            document.getElementById('content').innerHTML = cat.content ? cat.content : 'no content available'
          }
        });
      } else {
        document.getElementById(
          'cat-info-container',
        ).innerHTML = `Unfortunately there is no Data available for ${category} category`;
      }
    
      console.log(categoryInfo);
    }
  } catch (error) {
    console.log(error);
  }
}
