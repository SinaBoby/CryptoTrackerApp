export function marketDataElement() {
  const element = document.createElement('div');
  element.id = 'marketData-element';
  element.innerHTML = `
  <div id="top-five-list">
  <ul id="top-five">
  </ul>
  </div>
  <div class="flex-container">
  <div id="trends-container">
  <h4>7 most trend Assets</h4>
  <table id="trends">
  <thead>
  <tr>
    <th>#</th>   
    <th>Symbol</th>
    <th>Name</th>
    <th>BTC Price</th>
  </tr>
  </thead>
  <tbody id="trends-body"></tbody>
  </table>
  </div>
  <div id="global-container">
  <h4>Global market data</h4>
  <ul id="global">

  </ul>
  </div>
  </div>
  <div id="exchanges-container">
  <h4>Top 10 trusted Exchanges</h4>
  <table id="exchanges">
  <thead>
  <tr>
    <th>Trust Rank</th>   
    <th>Logo</th>
    <th>Name</th>
    <th>24H Trade Volume</th>
    <th>Country</th>
    <th>Url</th>
  </tr>
  </thead>
  <tbody id="exchanges-body"></tbody>
  </table>
  </div>
  
  `;
  return element;
}
