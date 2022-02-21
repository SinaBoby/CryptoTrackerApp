export const loadCategoriesData = () => {
  const element = document.createElement('div');
  element.id = 'categories-data';
  element.innerHTML = String.raw`
  <div id="top-five-list">
  <ul id="top-five">
  </ul>
  </div>
 <h2>Please select a category from the list:</h2>
 <select id="categories-list" name="categories-list">
 </select>
 <div id="cat-info-container"></div>
  `
  return element;
}