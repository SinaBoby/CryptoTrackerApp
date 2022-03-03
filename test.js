/**
 * We expect data to be an object with the property 'results'.
 * The 'results' property is an array of objects with the following structure:
 * 
 * {
 *   type: 'cat' or 'dog',
 *   name: <any string>
 * }
 * 
 * We also assume that there is a `ul` element already in the DOM with the id 'catlist' and 'doglist'
 */
 const convertData = (data) => {
  const { results } = data;
  const cats =[];
  const dogs =[];
  
  results.forEach((result) => {
    if (result.type === "cat") {
      const catList = document.getElementById("catlist");
      const cat = document.createElement("li");
      cat.innerText = result.name;
      catList.appendChild(cat);
      cats.push(result);
    } else {
      const dogList = document.getElementById("doglist");
      const dog = document.createElement("li");
      dog.innerText = result.name;
      dogList.appendChild(dog);
      dogs.push(result);
    }
  });
  
  return {
    cats,
    dogs,
  };
 };