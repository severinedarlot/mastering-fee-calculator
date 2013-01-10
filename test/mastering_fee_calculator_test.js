var assert = require("assert"),
  calculator = require("../lib/mastering_fee_calculator");

describe('Calculator', function(){
    it('should return 35 when there is 1 song', function(){
      var inputs = new function () { this.songCount = 1};
      assert.equal(35, calculator.compute(inputs));
    });
    it('should return 35 * 2 = 70 when there is 2 songs', function(){
      var inputs = new function () { this.songCount = 2};
      assert.equal(70, calculator.compute(inputs));
    });
    it('1 EP is 6 songs and cost 180', function(){
      var inputs = new function () { this.songCount = 6};
      assert.equal(180, calculator.compute(inputs));
    });
    it('EP price: should return 180/6 * 7 = 210 when there is 7 songs', function(){
      var inputs = new function () { this.songCount = 7};
      assert.equal(210, calculator.compute(inputs));
    });
    it('EP price: should return 180/6 * 11 = 330 when there is 11 songs', function(){
      var inputs = new function () { this.songCount = 11};
      assert.equal(330, calculator.compute(inputs));
    });
    it('EP price: should return 180/6 * 12 = 360 when there is 12 songs', function(){
      var inputs = new function () { this.songCount = 12};
      assert.equal(360, calculator.compute(inputs));
    });
    it('LP priceis 13 songs and cost 360', function(){
      var inputs = new function () { this.songCount = 13};
      assert.equal(360, calculator.compute(inputs));
    });
    it('LP price: should return 360/13 + 360 = 360.77 when there is 14 songs', function(){
      var inputs = new function () { this.songCount = 14};
      assert.equal(387.70, calculator.compute(inputs));
    });
    it('LP price: should return 360/13*7 + 360 = 515.39 when there is 20 songs', function(){
      var inputs = new function () { this.songCount = 20};
      assert.equal(553.85, calculator.compute(inputs));
    });
    it('with stem mastering', function () {
      var inputs = new function () {
        this.stem = true;
        this.songCount = 1;
      };
      assert.equal(12 + 35, calculator.compute(inputs));
    });
    it('with stem mastering with 2 songs', function () {
        var inputs = new function () {
            this.stem = true;
            this.songCount = 2;
        };
        assert.equal(12*2 + 35*2, calculator.compute(inputs));
    });
    it('with stem mastering with 7 songs', function () {
        var inputs = new function () {
            this.stem = true;
            this.songCount = 7;
        };
        assert.equal(12*7 + 210, calculator.compute(inputs));
    });

});
