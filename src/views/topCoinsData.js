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
        <td><img src="${coin.image}" class="coin-logo">${coin.name}</td>  
      <td>${coin.current_price}$</td>
      <td >${coin.price_change_percentage_24h}%</td>
      <td>${coin.total_volume}$</td>
      <td>${coin.market_cap}$</td>
      
      `;

        topCoins.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return element;
};
