var assert = require("assert"),
  calculator = require("../lib/mastering_fee_calculator");

describe('Calculator', function(){
  it('Big simulation 360 + 360/13/2 + 12*13 + 12*13 + 30 + 20 + 12*5 + 15', function(){
    var inputs = new function () {
      this.songCount = {0: 12, 1: 1, 2: 0, 3: 0};
      this.stem = 13;
      this.extraLoud = true;
      this.ddpCoding = true;
      this.physicDelivery = true;
      this.pboInstru = 5;
      this.postalSending = true;
    };
    var result = calculator.compute(inputs);
    console.log(inputs);
    console.log('Result = ', result);
    assert.equal(810.85, calculator.compute(inputs));
  });
});
