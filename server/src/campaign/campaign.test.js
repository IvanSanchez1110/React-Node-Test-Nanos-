const expect = require("chai").expect;
const campaign = require("./index");

describe("Campaign", () => {
  it("should get campaign object", () => {
    expect(campaign).to.be.an("object");
  });
});
