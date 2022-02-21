export const createHomeElement = () => {
  const element = document.createElement('div');
  element.id = 'home-element';
  element.innerHTML = String.raw`
  <h1>Top 10 of the Market</h1>
  <div id="loading"><p>hi</p></div>
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
  </table>
  `;

  return element;
};
