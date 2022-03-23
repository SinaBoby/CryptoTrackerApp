export function displayLoading() {
  const loader = document.getElementById('loading')
    ? document.getElementById('loading')
    : document.createElement('div');
  loader.id = 'loading';
  document
    .getElementById('user-interface')
    .insertAdjacentElement('afterbegin', loader);
  loader.classList.add('display');
}

export function hideLoading() {
  const loader = document.getElementById('loading');
  loader.classList.remove('display');
}
