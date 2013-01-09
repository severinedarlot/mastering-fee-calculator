var assert = require("assert"),
  calculator = require("../lib/mastering_fee_calculator");

describe('Calculator', function(){
    it('should return 1 when there is 1 song', function(){
      assert.equal(35, calculator.compute(1));
    });
    it('should return 70 when there is 2 song', function(){
      /* 35 * 2 = 70 */
      assert.equal(70, calculator.compute(2));
    });
    it('should return 180 when there is 6 song', function(){
      /* 1 EP is 6 songs and cost 180 */
      assert.equal(180, calculator.compute(6));
    });
    it('should return 335 when there is 13 song', function(){
      /* 1 LP is 13 songs and cost 335 */
      assert.equal(335, calculator.compute(13));
    });
});