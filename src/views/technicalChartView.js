import { USER_INTERFACE_ID } from "../constants.js";
export const createTechnicalElement = () => {
  const technicalView = document.createElement('div');
  technicalView.innerHTML = String.raw`
  <div id="top-five-list">
  <ul id="top-five">
  </ul>
  </div>
 <h2>please select a coin from the list</h2>
 <select name="coins-list" id="coins-list"></select>
 <div id="chart-container"></div>
 `;
  document.getElementById(USER_INTERFACE_ID).appendChild(technicalView);
  
};
