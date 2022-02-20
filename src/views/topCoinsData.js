import { loadLightChart } from "./loadLightChart.js";

export const getTopCoinsData = async () => {
  const element = document.createElement('div');
  fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24%2C7d',
  )
    .then((response) => {
      if (!response.ok) {
        throw 'HTTP ERROR';
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);

      element.id = 'topCoins-table';
      element.innerHTML = String.raw`
      <h1>Top 10 of the Market</h1>
      <table id="top-coins-list">
      <thead>
      <tr>
        <th>Rank</th>   
        <th>Name</th>
        <th>Last Price</th>
        <th>24h change</th>
        <th>24h volume</th>
        <th>market Cap</th>
      </tr>
      </thead>
      <tbody id="top-coins-body"></tbody>
      `;

      const topCoins = document.getElementById('top-coins-body');
      data.forEach((coin) => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
        <td>${coin.market_cap_rank}</td>
        <td><a href="#" id="${coin.symbol}"> <img src="${coin.image}" class="coin-logo">${coin.name}</a></td>  
      <td>${coin.current_price}$</td>
      <td >${coin.price_change_percentage_24h}%</td>
      <td>${coin.total_volume}$</td>
      <td>${coin.market_cap}$</td>
      
      `;
        topCoins.appendChild(listItem);
        console.log(document.getElementById(`${coin.symbol}`))
        const name = document.getElementById(`${coin.symbol}`)
        name.addEventListener('click', loadDetails) 
        
      });
      
    })
    .catch((error) => {
      console.log(error);
    });
  return element;
};
async function loadDetails(e) {
  e.preventDefault()
  document.getElementById('container').innerHTML = '';
  console.log(this)
  console.log(this.id)
 const tradingViewChart =  document.createElement('div')
 tradingViewChart.id = this.id + "Chart"
 tradingViewChart.classList.add('tradingview-widget-container');
 document.getElementById('container').appendChild(tradingViewChart)
 const coinId = this.id.toUpperCase() + 'USDT'
 console.log(coinId)
 const miniChart = await loadLightChart(coinId,tradingViewChart.id)
 console.log(tradingViewChart.id)

}