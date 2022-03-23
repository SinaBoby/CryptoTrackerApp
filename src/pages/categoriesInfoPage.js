import { loadCategoriesData } from '../elementViews/loadCategoriesData.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { loadLivePrice } from '../elementViews/loadLivePrice.js';
import {
  fetchCategoryInfo,
  loadCatList,
  printCatInfo,
} from '../elementViews/loadCatList.js';
import { topPairs } from '../data.js';
import { errorHandler } from '../elementViews/error.js';
export async function categoriesDataPage() {
  try {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
    const categoriesElement = loadCategoriesData();
    userInterface.appendChild(categoriesElement);
    topPairs.forEach(async (pair) => {
      await loadLivePrice(pair);
    });
    const catList = await loadCatList();
    catList.forEach((category) => {
      const categoryName = document.createElement('option');
      categoryName.value = category.name;
      categoryName.textContent = category.name;
      document.getElementById('categories-list').appendChild(categoryName);
    });
    document
      .getElementById('categories-list')
      .addEventListener('change', showCatInfo);
    async function showCatInfo(e) {
      document.getElementById('cat-info-container').innerHTML = '';
      const category = e.target.value;
      const categoryInfo = await fetchCategoryInfo();
      const names = categoryInfo.map((cat) => cat.name);
      if (names.indexOf(category) > 0) {
        categoryInfo.forEach((cat) => {
          if (cat.name === category) {
            printCatInfo(cat);
            document.getElementById('content').innerHTML = cat.content
              ? cat.content
              : 'no content available';
          }
        });
      } else {
        document.getElementById(
          'cat-info-container',
        ).innerHTML = `Unfortunately there is no Data available for ${category} category`;
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}
