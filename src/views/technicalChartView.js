

export const createTechnicalElement =() =>{
  const technicalView = document.createElement('div');
 technicalView.innerHTML = String.raw`
 <h3>please select a coin from the lis</h3>
 <select name="coins-list" id="coins-list"></select>
 <div id="chart-container"></div>
 <p>hi</p>
 
 `
 return technicalView
}