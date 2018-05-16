// const getData = require("../somedata.js");
const homePage = {};

homePage.evts = [];

homePage.addEventListeners = (evts) => {
  for (let evt of evts) {
    document.querySelector(evt.selector).addEventListener(evt.eventType, evt.callback);    
  }
}

// responsible for building HTML using required data
homePage.pageHtml = () => {
  // return getData()
  // .then(data => {
    let content = ""; 
    content += `<h1>This is the Home Page</h1>`;
    return Promise.resolve(content);
  // });
}

module.exports = homePage;
