const getCategories = require("../get-categories.js");
const categoriesPage = {};

categoriesPage.evts = [];

categoriesPage.addEventListeners = (evts) => {
  for (let evt of evts) {
    document.querySelector(evt.selector).addEventListener(evt.eventType, evt.callback);    
  }
}

// responsible for building HTML using required data
categoriesPage.pageHtml = () => {
  return getCategories()
  .then(categories => {
    let content = ""; 
    content += `<h1>This is a page of categories!</h1>`;
    for (let category of categories) {
      content += `<h3>${category.name}</h3>`;
    }
    return content;
  });
}

module.exports = categoriesPage;
