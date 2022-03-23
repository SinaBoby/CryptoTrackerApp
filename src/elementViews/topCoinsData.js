import { loadLightChart } from './loadLightChart.js';
import { displayLoading, hideLoading } from './loading.js';
import { topCoinsElementView } from './topCoinElementView.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { errorHandler } from './error.js';
export const getTopCoinsData = () => {
  return new Promise((resolve, reject) => {
   /*  fetch('/')
    .then(response => {
      return response.text()
    })
    .then(html => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      window.innerHTML = doc
      console.log(doc)
    }) */
    topCoinsElementView();
    displayLoading();
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24%2C7d';
    fetch('/api/topCoins')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load the table : HTTP Error');
        } else {
          hideLoading();
          return response.json();
        }
      })
      .then((data) => {
        data.forEach((coin) => {
          loadCoinData(coin);
          const name = document.getElementById(`${coin.symbol}`);
          name.addEventListener('click', loadDetails);
        });
        const container = document.createElement('div');
        container.id = 'container';
        document.getElementById(USER_INTERFACE_ID).appendChild(container);
    container.style.marginBottom = '20px'
      })
      .catch((error) => {
        errorHandler(error);
        reject(error);
      });

    resolve();
  });
};
async function loadDetails(e) {
  try {
    e.preventDefault();
    displayLoading();
    
    const container = document.getElementById('container')
    container.innerHTML = '';
    const tradingViewChart = document.createElement('div');
    tradingViewChart.id = this.id + 'Chart';
    tradingViewChart.classList.add('tradingview-widget-container');
    container.appendChild(tradingViewChart);
    const coinId = this.id.toUpperCase() + 'USDT';
    await loadLightChart(coinId, tradingViewChart.id);
    hideLoading();
    window.scroll(0,document.body.scrollHeight);
  } catch (error) {
    errorHandler(error);
  }
}
function loadCoinData(coin) {
  const topCoins = document.getElementById('top-coins-body');
  const listItem = document.createElement('tr');
  listItem.innerHTML = `
<td>${coin.market_cap_rank}</td>
<td><img src="${coin.image}" class="coin-logo" ><a href="#" id="${coin.symbol}"> ${coin.name}</a></td>  
<td>${coin.current_price} $</td>
<td class="${coin.price_change_percentage_24h > 0 ? 'bullish' : 'bearish'}">${
    coin.price_change_percentage_24h
  } %</td>
<td>${coin.total_volume} $</td>
<td>${coin.market_cap} $</td>
`;
  topCoins.appendChild(listItem);
}
