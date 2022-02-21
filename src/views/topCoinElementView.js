export async function topCoinsElementView() {
  const element = document.createElement('div');
  element.id = 'topCoins-container';
  element.innerHTML = String.raw`
    <h1>Top 10 of the Market</h1>
    <table id="top-coins-table">
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
  document.getElementById('user-interface').appendChild(element);
  return element;
}
