// responsible for making request for test data
const getTestData = () => {
  return fetch("src/test-data.json")
  .then(data => data.json());
}

module.exports = getTestData;