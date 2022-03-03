# Crypto Tracker App

<img src="./public/assets/demo.gif">

---

This project has created as the end project for  [Browsers module](https://github.com/HackYourFuture/UsingAPIs) of [Hack Your Future](https://www.hackyourfuture.net/) program.

### link to the Demo:
[Demo](https://sinacryptoland.netlify.app/)

---

## Features

    - Show table of top 10 assets in Crypto market plus their info and price charts.
    
    - Show all pairs listed on Binance crypto exchange and their Technical charts with all useful options.
    
    - Show other market meta data include most trusted exchanges, most trend assets and other global data. 
    
    - Show top5 assets live price using Websockets. 

---

## 🛠️ Used tools and languages

![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E)
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26)
![](https://img.shields.io/badge/Style-CSS3-informational?style=flat&logo=CSS3&color=1572B6)
![](https://img.shields.io/badge/style-SASS-informational?style=flat&logo=SASS&color=E34F26)
![](https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&color=F05032)
![](https://img.shields.io/badge/Tools-Netlify-informational?style=flat&logo=netlify&color=00C7B7)
![](https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717)
![](https://img.shields.io/badge/Tools-VSCode-informational?style=flat&logo=visualstudiocode&color=1572B6)

---
## Development

To run this project locally you will need to open `index.html` in your browser using a local server. LiveServer, `http-server`, `study-lenses`, or any other local static server will work.

## Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to install prettier for this project then run (generally you always want to do this if you see a `package.json` file):

- `npm install`

## Structure

Let's run through the folders:

```
public
src
└── pages
|    └── HomePage.js
|    └── marketDataPage.js
|    └── technicalPage.js
|     └── categoriesInfoPage.js
└── views
|    └── error.js
|    └── loadCategories.js
|    └── loadCatList.js
|    └── loadingSpin.js
|    └── loadLightChart.js
|    └── loadLivePrice.js
|    └── loadTechnicalChart.js
|    └── loadMarketData.js
|    └── loadmarketDataElement.js
|    └── navBarView.js
|    └── loadTechnicalChart.js
|    └── technicalChartView.js
|    └── topCoinsElement.js
|    └── topCoinsData.js
|     
└── app.js
└── constants.js
└── data.js
└── router.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
- `pages` this folder contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
  it also contains our code that links up our handler code to the DOM.
- `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the pages do.
- `app.js` this file our initialization code. Generally this code should only run once and starts the application
- `data.js` this is our data model. Anything we need to store in the browser we place inside the data file
- `router.js` this file will transition the app from one page to the other and clear the HTML.

