const expect = require("chai").expect;
const server = require("./server");

describe("Server", () => {
  it("should get server object", () => {
    expect(server).to.be.an("object");
  });
  it("should get server.listen function", () => {
    expect(server.listen).to.be.a("function");
  });
  it("should get server.close function", () => {
    expect(server.close).to.be.a("function");
  });
});
