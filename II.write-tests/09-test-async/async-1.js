const fetch = require("node-fetch");

const getRepos = function(repoName) {
  return fetch(repoName)
    .then(data => {

      console.log("status ", data.status);
      console.log("url ", data.url);
      console.log("statusText ", data.statusText);
      return data.json();

    })
    .then(function(response) {
      return response.map(function(rep) {
        return rep.name;
      });
    })
    .catch(err => {
      return err;
    })
};

module.exports = getRepos;
