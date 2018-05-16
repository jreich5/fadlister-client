import "../scss/main.scss"
const router = require('./router.js');

{
  "use strict";
  const pageContainer = document.querySelector('#pageContainer');
  window.addEventListener("queryChange", () => {
    router(pageContainer);
  });
  router(pageContainer); // responsible for determining page to render
}