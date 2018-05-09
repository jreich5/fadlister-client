const render = require('./render.js');
const comps = require('./components/components.js');

/*
 * Function determines url search query for a given page and renders the page 
 */
const router = (pageContainer) => {

  const urlParams = new URLSearchParams(window.location.search);
  let pageContent;

  switch(urlParams.get('page')) {
    case 'test':
      pageContent = comps.buildTestPage;
      break;
    case 'categories':
      pageContent = comps.buildCategoriesPage;
      break;
  }

  render(pageContent, pageContainer);

}

module.exports = router;