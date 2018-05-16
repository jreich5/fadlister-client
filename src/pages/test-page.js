const getTestData = require("../get-test-data");
const testPage = {};

testPage.evts = [
  {
    selector: "#catPageLink",
    eventType: "click",
    callback: () => {
      const queryChangeEvent = new Event('queryChange');
      if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?page=categories';
        window.history.pushState({path:newurl},'',newurl);
        window.dispatchEvent(queryChangeEvent);
      }
      return false;
    }
  }
];

testPage.addEventListeners = (evts) => {
  for (let evt of evts) {
    document.querySelector(evt.selector).addEventListener(evt.eventType, evt.callback);    
  }
}

// responsible for building HTML using required data
testPage.pageHtml = () => {
  return getTestData()
  .then(testItems => {
    let content = ""; 
    content += `<span draggable="true" class="faux-link" id="catPageLink">Categories Page</span>`;
    content += `<h1>This is a test page with test data!</h1>`;
    for (let testItem of testItems) {
      content += `<h3>${testItem}</h3>`;
    }
    return content;
  });
}

module.exports = testPage;

