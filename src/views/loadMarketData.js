import { errorHandler } from './error.js';
export async function fetchTrends() {
  try {
    const url = 'https://api.coingecko.com/api/v3/search/trending';
    displayLoading('trends');
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Unable to load Trending coins Data : HTTP ERROR');
    } else {
      hideLoading('trends');
      return response.json();
      
    }
  } catch (error) {
    errorHandler(error);
  }
}
export async function fetchExchanges() {
  try {
    const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1';
    displayLoading('exchanges');
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Unable to Load Exchanges Data : HTTP ERROR');
    } else {
      hideLoading('exchanges');
      return response.json();
    }
  } catch (error) {
    errorHandler(error);
  }
}
export async function fetchGlobal() {
  try {
    const url = 'https://api.coingecko.com/api/v3/global';
    displayLoading('global');
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Unable to load Global Data : HTTP ERROR');
    } else {
      hideLoading('global');
      return response.json();
    }
  } catch (error) {
    errorHandler(error);
  }
}
function displayLoading(content) {
  const loader = document.createElement('div');
  loader.id = 'loading';
  document
    .getElementById(`${content}-container`)
    .insertAdjacentElement('afterbegin', loader);
  loader.classList.add('display');
  loader.classList.add(`${content}-loading`);
  setTimeout(() => {
    loader.classList.remove('display');
  }, 5000);
}
function hideLoading(content) {
  const loader = document.querySelector(`.${content}-loading`);
  loader.classList.remove('display');
}
