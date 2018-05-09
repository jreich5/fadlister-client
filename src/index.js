import "../scss/main.scss"
const router = require('./router.js');

{
  "use strict";
  const pageContainer = document.querySelector('#pageContainer');
  router(pageContainer); // responsible for determining page to render
}