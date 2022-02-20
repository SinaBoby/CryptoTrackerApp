export const loadLivePrice = async (symbol = 'btcusdt') => {
  const priceElement = document.createElement('p');
  priceElement.id = `${symbol}-p`;
  loadPriceTicker(symbol)
    .then((ws) => {
      console.log(ws);
      publishPrice(ws);
    })
    .catch((error) => console.log(error));
  return priceElement;
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
    priceElement.textContent = parseFloat(stockObject.data.c).toFixed(2);
    priceElement.style.color =
      !lastPrice || lastPrice === stockObject.data.c
        ? 'black'
        : lastPrice < stockObject.data.c
        ? 'green'
        : 'red';
    lastPrice = stockObject.data.c;
  };
}
