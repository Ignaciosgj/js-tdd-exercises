const fetcher = require("./fetcher");
const fetch = require("node-fetch");
jest.mock("node-fetch");

describe("given the fetcher function", () => {
  const url = "https://api.github.com/users/kabaros/repos";

  it("should return data", () => {
    //arrange
    const func = () => ["aws-lambda-starter", "dom-ajax-repo"]
    fetch.mockResolvedValue({status: 200, url: "http://www.url.cl", statusText: "accepted", json: func});
    
    //act
    return fetcher(url).then(response => {

      //assert
      expect(response).toContain("aws-lambda-starter");
      expect(response).toContain("dom-ajax-repo");
    });
  });

  it("should reject get", () => {
    //arrange
    const func = jest.fn().mockRejectedValue({status: 404});
    fetch.mockResolvedValue({status: 404, url: "http://www.url.cl", statusText: "not found", json: func});

    //act
    return fetcher(url).then(response => {

      //assert
      expect(response.status).toBe(404);
    });
  });
});
