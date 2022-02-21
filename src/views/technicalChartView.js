export const createTechnicalElement = () => {
  const technicalView = document.createElement('div');
  technicalView.innerHTML = String.raw`
 <h3>please select a coin from the list</h3>
 <select name="coins-list" id="coins-list"></select>
 <div id="chart-container"></div>
 `;
  document.getElementById('user-interface').appendChild(technicalView);
  return technicalView;
};
