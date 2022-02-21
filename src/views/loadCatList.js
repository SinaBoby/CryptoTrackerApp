import { displayLoading, hideLoading } from './loading.js';
export async function loadCatList() {
  try {
    displayLoading();
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/categories/list',
    );
    if (!response.ok) {
      throw 'unable to load the list';
    } else {
      hideLoading();
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
}
export async function fetchCategoryInfo() {
  try {
    displayLoading();
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/categories?order=name_asc',
    );
    if (!response.ok) {
      throw 'unable to load the content';
    } else {
      hideLoading();
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
}
export function printCatInfo(cat) {
  const container = document.getElementById('cat-info-container');

  container.innerHTML = `
  <h2>${cat.name}</h2>
  <h4>Content:</h4>
 <p id="content"></p>
 <br>
 <h4>Market Data</h4>
 <ul>
<li>Market Cap : ${cat.market_cap}</li>
<li>Market Cap 24H change : ${cat.market_cap_change_24h}</li>
<li>volume 24H : ${cat.volume_24h}</li>
<br>
<h4>Top 3 Assets</h4>
<img id="first-asset" src="${cat.top_3_coins[0]}">
<img id="second-asset" src="${cat.top_3_coins[1]}">
<img id="third-asset" src="${cat.top_3_coins[2]}">
 </ul>
  `;
}
