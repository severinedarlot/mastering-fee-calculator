var assert = require("assert"),
  calculator = require("../lib/mastering_fee_calculator");

describe('Calculator', function(){
    it('should return 1 when there is 1 song', function(){
      assert.equal(35, calculator.compute(1));
    });
    it('should return 70 when there is 2 song', function(){
      /* 35 * 2 = 70 */
      assert.equal(70, calculator.compute(2));
    })
});