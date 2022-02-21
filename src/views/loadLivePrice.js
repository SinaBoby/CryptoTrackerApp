import { displayLoading,hideLoading } from "./loading.js";
export const loadLivePrice = async (symbol = 'btcusdt') => {
  try{
    const priceElement = document.createElement('li');
  priceElement.id = `${symbol}-p`;
  displayLoading()
  const ws = await loadPriceTicker(symbol)
  publishPrice(ws)
  hideLoading()
  return priceElement
  }catch(error){
    document.getElementById('top-five').appendChild(error);
      console.log(error)
  }
 
};
function loadPriceTicker(symbol = 'btcusdt') {
  return new Promise((resolve, reject) => {
    let ws = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${symbol}@miniTicker`,
    );

    ws.onopen = function () {
      resolve(ws);
    };
    
    ws.onerror = (err) => {
      
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
    
    /* console.log(stockObject.data); */
    priceElement.textContent =`${symbol} :   ` + parseFloat(stockObject.data.c).toFixed(2) + ' $';
    priceElement.style.color =
      !lastPrice || lastPrice === stockObject.data.c
        ? 'black'
        : lastPrice < stockObject.data.c
        ? 'green'
        : 'red';
    lastPrice = stockObject.data.c;
  };
}
