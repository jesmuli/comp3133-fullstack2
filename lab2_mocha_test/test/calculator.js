var calculator = require("../app/calculator");
var expect = require("chai").expect;

var x = 5;
var y = 2;

describe("Basic Calculator", () => {
	var add = calculator.add(x, y);
	var sub = calculator.sub(x, y);
	var mul = calculator.mul(x, y);
	var div = calculator.div(x*2, y);

	it("5 + 2 = 7", () => {
      expect(add).to.equal(7);
    });
    it("5 + 2 = 8", () => {
      expect(add).to.equal(8);
    });
    it("5 - 2 = 3", () => {
      expect(sub).to.equal(3);
    });
    it("5 - 2 = 5", () => {
      expect(sub).to.equal(5);
    });
    it("5 * 2 = 10", () => {
      expect(mul).to.equal(10);
    });
    it("5 * 2 = 12", () => {
      expect(mul).to.equal(12);
    });
    it("10 / 2 = 5", () => {
      expect(div).to.equal(5);
    });
    it("10 / 2 = 2", () => {
      expect(div).to.equal(2);
    });
});

