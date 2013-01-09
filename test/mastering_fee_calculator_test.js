var assert = require("assert"),
  calculator = require("../lib/mastering_fee_calculator");

describe('Array', function(){
    it('should return 0 when there is 0 song', function(){
      assert.equal(0, calculator.compute(0));
    })
});