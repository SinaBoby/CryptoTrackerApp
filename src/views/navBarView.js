export const createNavBar = () => {
  const navBar = document.createElement('nav');
  navBar.innerHTML = String.raw`
  <img src="../public/assets/logo.png" alt="logo" id="logo">
  <ul id="nav-list">
  <li class="nav-item"><a>Market Meta Data</a></li>
  <li class="nav-item"><a>Technical charts</a></li>
  <li class="nav-item"><a>Whitepapers</a></li>
  </ul>
  `;
  return navBar;
};
