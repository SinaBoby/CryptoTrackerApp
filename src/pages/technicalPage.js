import { USER_INTERFACE_ID } from '../constants.js';
import { createTechnicalElement } from '../views/technicalChartView.js';
import { loadTechnicalChart } from '../views/loadTechnicalChart.js';
export const technicalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const technicalElement = createTechnicalElement();
  userInterface.appendChild(technicalElement);
  fetch('https://api.binance.com/api/v1/exchangeInfo')
    .then((response) => response.json())
    .then((data) => {
      const symbols = data.symbols;

      return symbols;
    })
    .then((symbols) => {
      console.log(symbols);
      symbols.forEach((arr) => {
        console.log(arr.symbol);
        const symbol = arr.symbol;
        const option = document.createElement('option');
        option.value = symbol;
        option.textContent = symbol;
        const coinsList = document.getElementById('coins-list')
        coinsList.appendChild(option);
        coinsList.onchange = async function(){
          document.getElementById('chart-container').innerHTML = '';
          const symbol = coinsList.value
          const tradingViewChart = document.createElement('div');
          tradingViewChart.id = symbol;
          tradingViewChart.classList.add('tradingview-widget-container');
          document.getElementById('chart-container').appendChild(tradingViewChart);
          await loadTechnicalChart(symbol)
        }
      });
    });
};
