import { USER_INTERFACE_ID } from "../constants.js";
export async function topCoinsElementView() {
  const element = document.createElement('div');
  element.id = 'topCoins-container';
  element.innerHTML = String.raw`
    <h1>Top 50 of the Market</h1>
    <P>Click on each Coin Name to See the price Chart below the table</p>
    <table id="top-coins-table">
    <thead>
    <tr>
      <th>#</th>      
      <th>Coin</th>
      <th>Price</th>
      <th>24h change</th>
      <th>24h volume</th>
      <th>market Cap</th>
    </tr>
    </thead>
    <tbody id="top-coins-body"></tbody>
    `;
  document.getElementById(USER_INTERFACE_ID).appendChild(element);
  
}
