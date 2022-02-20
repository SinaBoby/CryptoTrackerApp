
import { USER_INTERFACE_ID } from "../constants.js";
import { createTechnicalElement } from "../views/technicalChartView.js";
export const technicalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
 userInterface.innerHTML = '';
 const technicalElement = createTechnicalElement()
 userInterface.appendChild(technicalElement)
}