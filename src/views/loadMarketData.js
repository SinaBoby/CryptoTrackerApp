export async function fetchTrends() {
  try {
    displayLoading('trends');
    const response = await fetch(
      'https://api.coingecko.com/api/v3/search/trending',
    );
    if (!response.ok) {
      throw 'HTTP ERROR';
    } else {
      hideLoading('trends');
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
}
export async function fetchExchanges() {
  try {
    displayLoading('exchanges');
    const response = await fetch(
      'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1',
    );
    if (!response.ok) {
      throw 'HTTP ERROR';
    } else {
      hideLoading('exchanges');
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
}
export async function fetchGlobal() {
  try {
    displayLoading('global');
    const response = await fetch('https://api.coingecko.com/api/v3/global');
    if (!response.ok) {
      throw 'HTTP ERROR';
    } else {
      hideLoading('global');
      return response.json();
    }
  } catch (error) {
    console.log(error);
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
