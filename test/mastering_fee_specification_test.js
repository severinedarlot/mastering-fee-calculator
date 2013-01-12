var assert = require("assert"),
  calculator = require("../lib/mastering_fee_calculator");

describe('Calculator', function(){
  it('Big simulation 360 + 360/13/2 + 12*13 + 12*13 + 30 + 40 + 12*5 + 15', function(){
    var inputs = new function () {
      this.songCount = {0: 12, 1: 1, 2: 0, 3: 0};
      this.stem = true;
      this.extraLoud = true;
      this.ddpCoding = true;
      this.pressDelivery = true;
      this.pboInstru = 5;
      this.postalSending = true;
    };
    var result = calculator.compute(inputs);
    console.log(inputs);
    console.log('Result = ', result);
    assert.equal(830.85, calculator.compute(inputs));
  });
});
