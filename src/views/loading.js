export function displayLoading() {
  const loader = document.getElementById('loading')
    ? document.getElementById('loading')
    : document.createElement('div');
  loader.id = 'loading';
  document
    .getElementById('user-interface')
    .insertAdjacentElement('afterbegin', loader);
  loader.classList.add('display');
  /* setTimeout(() => {
    loader.classList.remove('display');
  }, 5000); */
}

export function hideLoading() {
  const loader = document.getElementById('loading');
  loader.classList.remove('display');
}
