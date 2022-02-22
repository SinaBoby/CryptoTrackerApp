import { displayLoading, hideLoading } from './loading.js';
export async function loadLivePrice(symbol = 'btcusdt') {
  try {
    const priceElement = createElement(symbol);
    displayLoading();
    const ws = await loadPriceTicker(symbol);
    hideLoading();
    publishPrice(ws);
    return priceElement;
  } catch (error) {
    console.log(error.message);
  }
}
function loadPriceTicker(symbol = 'btcusdt') {
  return new Promise((resolve, reject) => {
    let ws = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${symbol}@miniTicker`,
    );

    ws.onopen = function () {
      resolve(ws);
    };

    ws.onerror = (err) => {
      console.log(err)
      reject(err);
      
    };
  });
}
function publishPrice(ws) {
  let lastPrice;
  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    const symbol = stockObject.data.s.toLowerCase();
    let priceElement = document.getElementById(`${symbol}-p`);
    priceElement.innerHTML =
      `<span class="symbol">${symbol} :</span>   ` +
      parseFloat(stockObject.data.c).toFixed(2) +
      ' $';
    priceElement.style.color =
      !lastPrice || lastPrice === stockObject.data.c
        ? 'black'
        : lastPrice < stockObject.data.c
        ? 'green'
        : 'red';
    lastPrice = stockObject.data.c;
  };
}
function createElement(symbol) {
  const priceElement = document.createElement('li');
  priceElement.id = `${symbol}-p`;
  document.getElementById('top-five').appendChild(priceElement);
  return priceElement;
}
