import { technicalPage } from './technicalPage.js';
import { categoriesDataPage } from './categoriesInfoPage.js';
import { createNavBar } from '../elementViews/navBarView.js';
import { getTopCoinsData } from '../elementViews/topCoinsData.js';
import { marketDataPage } from './marketDataPage.js';

export async function homePage(userInterfaceElement) {
  try {
   
    userInterfaceElement.innerHTML = '';
    document.getElementById('header').innerHTML = '';
    const navBar = createNavBar();
    document.getElementById('header').appendChild(navBar);
    await getTopCoinsData();
    
    document
      .getElementById('logo')
      .addEventListener('click', async function () {
        /* document.getElementById('header').innerHTML = ''; */
        
        await homePage(userInterfaceElement);
      });
    document
      .getElementById('technical-page')
      .addEventListener('click', technicalPage);
    document
      .getElementById('categories-info-page')
      .addEventListener('click', categoriesDataPage);
    document
      .getElementById('market-page')
      .addEventListener('click', marketDataPage);
  } catch (error) {
    console.log(error);
  }
}
