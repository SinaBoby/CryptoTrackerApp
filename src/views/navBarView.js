export const createNavBar = () => {
  const navBar = document.createElement('nav');
  navBar.innerHTML = String.raw`
  <img src="../public/assets/logo.png" alt="logo" id="logo">
  <ul id="nav-list">
  <li class="nav-item" id="market-page"><a>Market Meta Data</a></li>
  <li class="nav-item" id="technical-page"><a>Technical charts</a></li>
  <li class="nav-item" id="coins-info-page"><a>Coins Info</a></li>
  </ul>
  `;
  return navBar;
};
