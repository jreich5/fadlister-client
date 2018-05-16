/*
 * Takes in a DOM node to append inner HTML.
 */
const render = (page, pageContainer) => {
	page.pageHtml()
	.then(html => pageContainer.innerHTML = html)
  .then(() => page.addEventListeners(page.evts))
}

module.exports = render;