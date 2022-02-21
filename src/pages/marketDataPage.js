import { marketDataElement } from "../views/marketDataElement.js";
import { loadLivePrice } from "../views/loadLivePrice.js";
import { fetchTrends,fetchExchanges,fetchGlobal } from "../views/loadMarketData.js"
export async function marketDataPage(){
  try{
    const userInterface = document.getElementById('user-interface');
    userInterface.innerHTML = '';
    const marketDataElem =  marketDataElement()
    userInterface.appendChild(marketDataElem);
    const topPairs = ['btcusdt', 'ethusdt', 'bnbusdt', 'xrpusdt', 'adausdt'];
    topPairs.forEach(async (pair) => {
      const pairPrice = await loadLivePrice(pair);
      document.getElementById('top-five').appendChild(pairPrice);
    });
     const trendsList = await fetchTrends()
     const coins = trendsList.coins
     console.log(coins)
     coins.forEach(coin => {
       console.log(coin)
       const coinRow = document.createElement('tr')
       coinRow.innerHTML = `
       <td>${coin.item.market_cap_rank}</td>
       <td><img src="${coin.item.small}"></td>
       <td>${coin.item.name}</td>
       <td>${parseFloat(coin.item.price_btc).toFixed(6)} BTC</td>
       
       `
       document.getElementById('trends-body').appendChild(coinRow)
     })

     const exchanges = await fetchExchanges()
     exchanges.forEach(exchange => {
       console.log(exchange)
       const exchangeRow = document.createElement('tr')
       exchangeRow.innerHTML = `
       <td>${exchange.trust_score_rank}</td>
       <td><img src="${exchange.image}"></td>
       <td>${exchange.name}</td>
       <td>${parseFloat(exchange.trade_volume_24h_btc).toFixed(4)} BTC</td>
       <td>${exchange.country}</td>
       <td><a href="${exchange.url}">${exchange.url}</a></td>
       
       `
       document.getElementById('exchanges-body').appendChild(exchangeRow)
     })
     console.log(exchanges)
     const global = await fetchGlobal()
     printGlobalInfo(global.data)
     console.log(global.data)
     function printGlobalInfo(data) {
       const globalList = document.getElementById('global')
       globalList.innerHTML = `
       <li>Active CryptoCurrencies : ${data.active_cryptocurrencies} </li>
       <li>Number Of Markets : ${data.markets} </li>
       <li>Total Market Cap Change in 24h : ${data.market_cap_change_percentage_24h_usd} USD </li>
       
       `
     }
  }catch(error){
    console.log(error)
  }
  
}