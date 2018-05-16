const render = require('./render.js');
const pages = require('./pages/pages.js');

/*
 * Function determines url search query for a given page and renders the page 
 */
const router = (pageContainer) => {

  const urlParams = new URLSearchParams(window.location.search);
  let page;

  switch(urlParams.get('page')) {
    case 'test':
      page = pages.testPage;
      break;
    case 'categories':
      page = pages.categoriesPage;
      break;
    default:
      page = pages.homePage;
      break;
  }

  render(page, pageContainer);

}

module.exports = router;