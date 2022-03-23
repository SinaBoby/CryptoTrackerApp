import { displayLoading, hideLoading } from './loading.js';
import { errorHandler } from './error.js';
export async function loadCatList() {
  try {
    const url = 'https://api.coingecko.com/api/v3/coins/categories/list';
    displayLoading();
    const response = await fetch('/api/catList');
    if (!response.ok) {
      throw new Error('Unable to load the categories list : HTTP Error');
    } else {
      hideLoading();
      return response.json();
    }
  } catch (error) {
    errorHandler(error);
  }
}
export async function fetchCategoryInfo() {
  try {
    const url =
      'https://api.coingecko.com/api/v3/coins/categories?order=name_asc';
    displayLoading();
    const response = await fetch('/api/catInfo');
    if (!response.ok) {
      throw new Error('Unable to load the Data : HTTP Error');
    } else {
      hideLoading();
      return response.json();
    }
  } catch (error) {
    errorHandler(error);
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
<li><span>Market Cap :</span> ${cat.market_cap} USD</li>
<li class="${
    cat.market_cap_change_24h > 0 ? 'bullish' : 'bearish'
  }"><span>Market Cap 24H change :</span> ${cat.market_cap_change_24h} %</li>
<li><span>volume 24H :</span> ${cat.volume_24h} USD</li>
<br>
<h4>Top 3 Assets</h4>
<img id="first-asset" src="${cat.top_3_coins[0]}">
<img id="second-asset" src="${cat.top_3_coins[1]}">
<img id="third-asset" src="${cat.top_3_coins[2]}">
 </ul>
  `;
}
