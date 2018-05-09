const getCategories = require("../get-categories.js");

// responsible for building HTML using required data
const buildCategoriesPage = () => {
  return getCategories()
  .then(categories => {
    let content = ""; 
    content += `<h1>This is a a page of categories!</h1>`;
    for (let category of categories) {
      content += `<h3>${category.name}</h3>`;
    }
    return content;
  });
}

module.exports = buildCategoriesPage;
