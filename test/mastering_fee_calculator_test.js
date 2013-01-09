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
    it('EP price: should return 180 when there is 6 song', function(){
      /* 1 EP is 6 songs and cost 180 */
      assert.equal(180, calculator.compute(6));
    });
    it('EP price: should return 210 when there is 7 song', function(){
      /* EP price : 180/6 * 7 */
      assert.equal(210, calculator.compute(7));
    });
    it('EP price: should return 330 when there is 11 song', function(){
      /* EP price : 180/6 * 11 = 330 */
      assert.equal(330, calculator.compute(11));
    });
    it('EP price: should return 360 when there is 12 song', function(){
      /* EP price : 180/6 * 12 = 360 */
      assert.equal(360, calculator.compute(12));
    });
    it('LP price: should return 335 when there is 13 song', function(){
      /* 1 LP is 13 songs and cost 335 */
      assert.equal(335, calculator.compute(13));
    });
     it('LP price: should return 360.77 when there is 14 song', function(){
      /* LP price: 335/13 + 335 = 360.77 */
      assert.equal(360.77, calculator.compute(14));
    });

});