const getRepos = require("./async-1");
const fetch = require("node-fetch");
jest.mock("node-fetch");

test("gets a list of repositories names", function() {
  // arrange
  const func = () => {
    return [{name: "aws-lambda-starter"}, {name: "dom-ajax-repo"}]
  }
  fetch.mockResolvedValue({status: 201, url: "http://www.url.cl", statusText: "created", json: func});
  var url = "https://api.github.com/users/kabaros/repos";
  // act
  return getRepos(url).then(function(result) {
    // assert
    expect(result).toContain("aws-lambda-starter");
    expect(result).toContain("dom-ajax-repo");
  });
});
