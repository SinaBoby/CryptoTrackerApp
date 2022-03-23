import { USER_INTERFACE_ID } from '../constants.js';
import { createTechnicalElement } from '../elementViews/technicalChartView.js';
import { loadTechnicalChart } from '../elementViews/loadTechnicalChart.js';
import { displayLoading, hideLoading } from '../elementViews/loading.js';
import { loadLivePrice } from '../elementViews/loadLivePrice.js';
import { topPairs } from '../data.js';
import { errorHandler } from '../elementViews/error.js';
export const technicalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  createTechnicalElement();
  topPairs.forEach(async (pair) => {
    await loadLivePrice(pair);
  });
  displayLoading();
  fetch('/api/binanceInfo')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Unable to load Exchanges List : HTTP Error');
      } else {
        hideLoading();
        return response.json();
      }
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
            window.scroll({
              top: 440,
              left: 0,
              behavior: 'smooth',
            });
          } catch (error) {
            errorHandler(error);
          }
        };
      });
    });
};
