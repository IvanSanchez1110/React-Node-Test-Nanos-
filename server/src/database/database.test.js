const expect = require("chai").expect;
const database = require("./index");

describe("database", () => {
  it("should get campaign object", () => {
    expect(database).to.be.an("object");
  });
  it("database should contain init function", () => {
    expect(database.init).to.be.an("function");
  });
});
