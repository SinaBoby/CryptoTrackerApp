export function errorHandler(error) {
  const err = document.createElement('h3');
  err.innerHTML = error.message;
  document.getElementById('user-interface').appendChild(err);
}
