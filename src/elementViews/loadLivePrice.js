import { displayLoading, hideLoading } from './loading.js';
import { errorHandler } from './error.js';
export async function loadLivePrice(symbol = 'btcusdt') {
  try {
    const priceElement = createElement(symbol);
    displayLoading();
    const ws = await loadPriceTicker(symbol);

    hideLoading();
    publishPrice(ws);
    return priceElement;
  } catch (error) {
    errorHandler(error);
  }
}
function loadPriceTicker(symbol = 'btcusdt') {
  return new Promise((resolve, reject) => {
    let ws = new WebSocket(`ws://${location.host}/live?symbol=${symbol}`);

    ws.onopen = function () {
      console.log('connected');
      resolve(ws);
    };

    ws.onerror = (err) => {
      errorHandler(err);
      reject(err);
    };
    ws.onclose = () => {
      console.log('disconnected');
    };
  });
}
function publishPrice(ws) {
  let lastPrice;
  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    const symbol = stockObject.data.s.toLowerCase();
    let priceElement = document.getElementById(`${symbol}-p`);
    if (priceElement) {
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
    } else {
      ws.close();
    }
    lastPrice = stockObject.data.c;
  };
}
function createElement(symbol) {
  const priceElement = document.createElement('li');
  priceElement.id = `${symbol}-p`;
  const topFive = document.getElementById('top-five');
  if (topFive) {
    topFive.appendChild(priceElement);
  }
}
