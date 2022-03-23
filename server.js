import app from './index.js';
import queryString from 'query-string';
import WebSocket, { WebSocketServer } from 'ws';
const PORT = process.env.PORT || 3000;
console.log(process.env)
const server = app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

const wss = new WebSocketServer({ server, path: '/live' });
wss.on('connection', (ws, req) => {
  
  const [_path, params] = req.url.split('?');
  const searchParams = queryString.parse(params);
  

  let wss = new WebSocket(
    `wss://stream.binance.com:9443/stream?streams=${searchParams.symbol}@miniTicker`,
  );
  wss.onmessage = (event) => {
    let stockObject = event.data;
    ws.send(stockObject);
  };
  //connection is up, let's add a simple simple event
  ws.on('message', (message) => {
    //log the received message and send it back to the client
    console.log('received: %s', message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  /* ws.send('Hi there, I am a WebSocket server'); */
});
