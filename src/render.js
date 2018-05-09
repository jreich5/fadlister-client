/*
 * Takes in a DOM node to append inner HTML.
 */
const render = (pageContent, pageContainer) => {
	pageContent()
	.then(html => pageContainer.innerHTML = html);
}

module.exports = render;