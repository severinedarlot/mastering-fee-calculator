var assert = require("assert"),
  calculator = require("../lib/mastering_fee_calculator");

describe('Calculator', function(){
    it('should return 35 when there is 1 song', function(){
      var inputs = new function () { this.songCount = {0: 1}};
      assert.equal(35, calculator.compute(inputs));
    });
    it('should return 35 * 2 = 70 when there is 2 songs', function(){
      var inputs = new function () { this.songCount = {0: 2}};
      assert.equal(70, calculator.compute(inputs));
    });
    it('1 EP is 6 songs and cost 180', function(){
      var inputs = new function () { this.songCount = {0: 6}};
      assert.equal(180, calculator.compute(inputs));
    });
    it('EP price: should return 180/6 * 7 = 210 when there is 7 songs', function(){
      var inputs = new function () { this.songCount = {0: 7}};
      assert.equal(210, calculator.compute(inputs));
    });
    it('EP price: should return 180/6 * 11 = 330 when there is 11 songs', function(){
      var inputs = new function () { this.songCount = {0: 11}};
      assert.equal(330, calculator.compute(inputs));
    });
    it('EP price: should return 180/6 * 12 = 360 when there is 12 songs', function(){
      var inputs = new function () { this.songCount = {0: 12}};
      assert.equal(360, calculator.compute(inputs));
    });
    it('LP priceis 13 songs and cost 360', function(){
      var inputs = new function () { this.songCount = {0: 13}};
      assert.equal(360, calculator.compute(inputs));
    });
    it('LP price: should return 360/13 + 360 = 387.70 when there is 14 songs', function(){
      var inputs = new function () { this.songCount = {0: 14}};
      assert.equal(387.70, calculator.compute(inputs));
    });
    it('LP price: should return 360/13*7 + 360 = 515.39 when there is 20 songs', function(){
      var inputs = new function () { this.songCount = {0: 20}};
      assert.equal(553.85, calculator.compute(inputs));
    });
    it('with stem mastering', function () {
      var inputs = new function () {
        this.stem = true;
        this.songCount = {0: 1};
      };
      assert.equal(12 + 35, calculator.compute(inputs));
    });
    it('with stem mastering with 2 songs', function () {
        var inputs = new function () {
            this.stem = true;
            this.songCount = {0: 2};
        };
        assert.equal(12*2 + 35*2, calculator.compute(inputs));
    });
    it('with stem mastering with 7 songs', function () {
        var inputs = new function () {
            this.stem = true;
            this.songCount = {0: 7};
        };
        assert.equal(12*7 + 210, calculator.compute(inputs));
    });
    it('with extra loud with 1 song', function () {
        var inputs = new function () {
            this.extraLoud = true;
            this.songCount = {0: 1};
        };
        assert.equal(12 + 35, calculator.compute(inputs));
    });
    it('with extra loud with 7 songs', function () {
        var inputs = new function () {
            this.extraLoud = true;
            this.songCount = {0: 7};
        };
        assert.equal(12*7 + 210, calculator.compute(inputs));
    });
    it('with extra loud with 14 songs', function () {
        var inputs = new function () {
            this.extraLoud = true;
            this.songCount = {0: 14};
        };
        assert.equal(12*14 + 387.70, calculator.compute(inputs));
    });
  it('with DDP encodage', function () {
    var inputs = new function () {
      this.ddpEncodage = true;
      this.pressDelivery = false;
      this.songCount = {0: 1};
    };
    assert.equal(30 + 35, calculator.compute(inputs));
  });
  it('with DDP encodage and press delivery', function () {
      var inputs = new function () {
          this.ddpEncodage = true;
          this.pressDelivery = true;
          this.songCount = {0: 1};
      };
      assert.equal(30 + 40 + 35, calculator.compute(inputs));
  });
  it('with postal sending', function () {
      var inputs = new function () {
          this.postalSending = true;
          this.songCount = {0: 1};
      };
      assert.equal(15 + 35, calculator.compute(inputs));
  });
  it('with pbo instru', function () {
    var inputs = new function () {
      this.pboInstru = 1;
      this.songCount = {0: 1};
    };
    assert.equal(35 + 12, calculator.compute(inputs));
  });
  it('with pbo instru and 7 songs', function () {
    var inputs = new function () {
      this.pboInstru = 7;
      this.songCount = {0: 7};
    };
    assert.equal(30 * 7 + 12 * 7, calculator.compute(inputs));
  });
  it('with 1 song between 5 and 9 minutes give 35 + 35/2 = 52,5', function () {
    var inputs = new function () {
      this.songCount = {1: 1};
    };
    assert.equal(52.5, calculator.compute(inputs));
  });
  it('with 1 song between 10 and 14 minutes give 35 + 35*2/2 = 70', function () {
    var inputs = new function () {
      this.songCount = {2: 1};
    };
    assert.equal(70, calculator.compute(inputs));
  });
  it('with 1 song between 15 and 19 minutes give 35 + 35*3/2 = 87,50', function () {
    var inputs = new function () {
      this.songCount = {3: 1};
    };
    assert.equal(87.50, calculator.compute(inputs));
  });
  it('with 1 basic song and 1 song between 5 and 9 minutes give 35 * 2 + 35/2 = 87,5', function () {
    var inputs = new function () {
      this.songCount = {0: 1, 1: 1};
    };
    assert.equal(87.5, calculator.compute(inputs));
  });
  it('with 4 basic songs and 2 songs between 5 and 9 minutes give 180 + 30 / 2 * 2 = 210', function () {
    var inputs = new function () {
      this.songCount = {0: 4, 1: 2};
    };
    assert.equal(210, calculator.compute(inputs));
  });
});
