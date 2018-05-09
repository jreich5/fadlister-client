// responsible for making request for test data
const getCategories = () => {
  return fetch("http://localhost:8080/test")
  .then(data => data.json());
}

module.exports = getCategories;