import { loadLightChart } from './loadLightChart.js';
import { displayLoading, hideLoading } from './loading.js';
import { topCoinsElementView } from './topCoinElementView.js';
export const getTopCoinsData = async () => {
  return new Promise((resolve, reject) => {
    const element = topCoinsElementView();

    displayLoading();
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24%2C7d',
    )
      .then((response) => {
        if (!response.ok) {
          throw 'HTTP ERROR';
        } else {
          hideLoading();
          return response.json();
        }
      })
      .then((data) => {
        const topCoins = document.getElementById('top-coins-body');
        data.forEach((coin) => {
          const listItem = document.createElement('tr');
          listItem.innerHTML = `
        <td>${coin.market_cap_rank}</td>
        <td><img src="${coin.image}" class="coin-logo"></td>
        <td><a href="#" id="${coin.symbol}"> ${coin.name}</a></td>  
      <td>${coin.current_price} $</td>
      <td class="${coin.price_change_percentage_24h>0 ? 'bullish' : 'bearish'}">${coin.price_change_percentage_24h} %</td>
      <td>${coin.total_volume} $</td>
      <td>${coin.market_cap} $</td>
      `;
          topCoins.appendChild(listItem);

          const name = document.getElementById(`${coin.symbol}`);
          name.addEventListener('click', loadDetails);
          
        });
        const container = document.createElement('div');
        container.id = 'container';
        document.getElementById('user-interface').appendChild(container);
      })
      .catch((error) => {
        const err = document.createElement('h3')
        err.innerHTML = error.message
        document.getElementById('user-interface').appendChild(err)
        reject(error);
      });

    resolve(element);
  });
};
async function loadDetails(e) {
  try {
    e.preventDefault();
    displayLoading();
    const container = document.getElementById('container');
    container.innerHTML = '';
    const tradingViewChart = document.createElement('div');
    tradingViewChart.id = this.id + 'Chart';
    tradingViewChart.classList.add('tradingview-widget-container');
    container.appendChild(tradingViewChart);
    const coinId = this.id.toUpperCase() + 'USDT';
    await loadLightChart(coinId, tradingViewChart.id);
    hideLoading();
    window.scroll({
      top: 1085,
      left: 0,
      behavior: 'smooth'
    });
  } catch (error) {
    console.log(error.message, 'unable to load the chart');
  }
}
