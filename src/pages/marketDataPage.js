import { marketDataElement } from '../elementViews/marketDataElement.js';
import { loadLivePrice } from '../elementViews/loadLivePrice.js';
import {
  fetchTrends,
  fetchExchanges,
  fetchGlobal,
} from '../elementViews/loadMarketData.js';
import { topPairs } from '../data.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { errorHandler } from '../elementViews/error.js';

export async function marketDataPage() {
  try {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
    const marketDataElem = marketDataElement();
    userInterface.appendChild(marketDataElem);
   /*  const ws = new WebSocket("ws://localhost:3000/live?symbol=btcusdt")
    ws.onopen = () => {
      console.log("new Connection")
      ws.send("how is it going?")
    }
    ws.onmessage =( event )=> {
      console.log(event.data)
    } */
    topPairs.forEach(async (pair) => {
       await loadLivePrice(pair);
      
    });
    const trendsList = await fetchTrends();
    const coins = trendsList.coins;
    coins.forEach((coin) => {
      
      const coinRow = document.createElement('tr');
      coinRow.innerHTML = `
       <td>${coin.item.market_cap_rank}</td>
       <td>${coin.item.symbol}</td>
       <td><img src="${coin.item.small}" style="margin-right:10px;width:20px">${coin.item.name}</td>
       <td>${parseFloat(coin.item.price_btc).toFixed(6)} BTC</td>
       `;
      document.getElementById('trends-body').appendChild(coinRow);
    });

    const exchanges = await fetchExchanges();
    exchanges.forEach((exchange) => {
      const exchangeRow = document.createElement('tr');
      exchangeRow.innerHTML = `
       <td>${exchange.trust_score_rank}</td>
       <td><img src="${exchange.image}"></td>
       <td>${exchange.name}</td>
       <td>${parseFloat(exchange.trade_volume_24h_btc).toFixed(4)} BTC</td>
       <td>${exchange.country}</td>
       <td><a href="${exchange.url}">${exchange.url}</a></td>
       
       `;
      document.getElementById('exchanges-body').appendChild(exchangeRow);
    });
    const global = await fetchGlobal();
    printGlobalInfo(global.data);
    function printGlobalInfo(data) {
      const globalList = document.getElementById('global');
      globalList.innerHTML = `
       <li><span>Active CryptoCurrencies :</span> ${data.active_cryptocurrencies} </li>
       <li><span>Number Of Markets :</span> ${data.markets} </li>
       <li class="${data.market_cap_change_percentage_24h_usd > 0 ? 'bullish' : 'bearish'}"><span>Total Market Cap Change in 24h :</span> ${data.market_cap_change_percentage_24h_usd} % </li>
       `;
    }
  } catch (error) {
    errorHandler(error);
  }
}
