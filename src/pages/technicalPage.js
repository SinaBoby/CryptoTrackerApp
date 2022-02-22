import { USER_INTERFACE_ID } from '../constants.js';
import { createTechnicalElement } from '../views/technicalChartView.js';
import { loadTechnicalChart } from '../views/loadTechnicalChart.js';
import { displayLoading, hideLoading } from '../views/loading.js';
import {loadLivePrice} from '../views/loadLivePrice.js'
export const technicalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  createTechnicalElement();
  const topPairs = ['btcusdt', 'ethusdt', 'bnbusdt', 'xrpusdt', 'adausdt'];
    topPairs.forEach(async (pair) => {
      const pairPrice = await loadLivePrice(pair);
      
    });
  displayLoading();
  fetch('https://api.binance.com/api/v1/exchangeInfo')
    .then((response) => {
      hideLoading();
      return response.json();
    })
    .then((data) => {
      const symbols = data.symbols;

      return symbols;
    })
    .then((symbols) => {
      symbols.forEach((arr) => {
        const symbol = arr.symbol;
        const option = document.createElement('option');
        option.value = symbol;
        option.textContent = symbol;
        const coinsList = document.getElementById('coins-list');
        coinsList.appendChild(option);
        coinsList.onchange = async function () {
          try {
            displayLoading();
            document.getElementById('chart-container').innerHTML = '';
            const symbol = coinsList.value;
            const tradingViewChart = document.createElement('div');
            tradingViewChart.id = symbol;
            tradingViewChart.classList.add('tradingview-widget-container');
            document
              .getElementById('chart-container')
              .appendChild(tradingViewChart);
            await loadTechnicalChart(symbol);
            hideLoading();
          } catch (error) {
            console.log(error);
          }
        };
      });
    });
};
