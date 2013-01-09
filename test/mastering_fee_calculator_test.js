var assert = require("assert"),
  calculator = require("../lib/mastering_fee_calculator");

describe('Calculator', function(){
    it('should return 35 when there is 1 song', function(){
      assert.equal(35, calculator.compute(1));
    });
    it('should return 35 * 2 = 70 when there is 2 songs', function(){
      assert.equal(70, calculator.compute(2));
    });
    it('1 EP is 6 songs and cost 180', function(){
      assert.equal(180, calculator.compute(6));
    });
    it('EP price: should return 180/6 * 7 = 210 when there is 7 songs', function(){
      assert.equal(210, calculator.compute(7));
    });
    it('EP price: should return 180/6 * 11 = 330 when there is 11 songs', function(){
      assert.equal(330, calculator.compute(11));
    });
    it('EP price: should return 180/6 * 12 = 360 when there is 12 songs', function(){
      assert.equal(360, calculator.compute(12));
    });
    it('LP priceis 13 songs and cost 360', function(){
      assert.equal(360, calculator.compute(13));
    });
    it('LP price: should return 360/13 + 360 = 360.77 when there is 14 songs', function(){
      assert.equal(387.70, calculator.compute(14));
    });
    it('LP price: should return 360/13*7 + 360 = 515.39 when there is 20 songs', function(){
      assert.equal(553.85, calculator.compute(20));
    });

});
