const getData = require("../somedata.js");
const genericPage = {};

genericPage.evts = [];

genericPage.addEventListeners = (evts) => {
  for (let evt of evts) {
    document.querySelector(evt.selector).addEventListener(evt.eventType, evt.callback);    
  }
}

// responsible for building HTML using required data
genericPage.pageHtml = () => {
  return getData()
  .then(data => {
    let content = ""; 
    return content;
  });
}

module.exports = genericPage;
