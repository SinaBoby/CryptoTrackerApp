import { loadCoinsData } from "../views/loadCoinsData.js";
import { USER_INTERFACE_ID } from "../constants.js";
export function coinsDataPage(){
  const userInterface = document.getElementById(USER_INTERFACE_ID)
  userInterface.innerHTML = '';
   loadCoinsData()

}