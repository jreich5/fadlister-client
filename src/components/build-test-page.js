const getTestData = require("../get-test-data");

// responsible for building HTML using required data
const buildTestPage = () => {
  return getTestData()
  .then(testItems => {
    let content = ""; 
    content += `<h1>This is a test page with test data!</h1>`;
    for (let testItem of testItems) {
      content += `<h3>${testItem}</h3>`;
    }
    return content;
  });
}

module.exports = buildTestPage;