export function displayLoading() {
  const loader = document.getElementById('loading')
  loader.classList.add('display')
  setTimeout(() => {
    loader.classList.remove('display');
  }, 5000);
}

export function hideLoading() {
  const loader = document.getElementById('loading')
  loader.classList.remove('display')
}