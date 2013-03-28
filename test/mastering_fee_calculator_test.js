test('should return 35 when there is 1 song', function () {
  var inputs = new function () {
    this.songCount = {0: 1}
  };
  equal(35, compute(inputs));
});
test('should return 35 * 2 = 70 when there is 2 songs', function () {
  var inputs = new function () {
    this.songCount = {0: 2}
  };
  equal(70, compute(inputs));
});
test('1 EP is 6 songs and cost 180', function () {
  var inputs = new function () {
    this.songCount = {0: 6}
  };
  equal(180, compute(inputs));
});
test('EP price: should return 180/6 * 7 = 210 when there is 7 songs', function () {
  var inputs = new function () {
    this.songCount = {0: 7}
  };
  equal(210, compute(inputs));
});
test('EP price: should return 180/6 * 11 = 330 when there is 11 songs', function () {
  var inputs = new function () {
    this.songCount = {0: 11}
  };
  equal(330, compute(inputs));
});
test('EP price: should return 180/6 * 12 = 360 when there is 12 songs', function () {
  var inputs = new function () {
    this.songCount = {0: 12}
  };
  equal(360, compute(inputs));
});
test('LP priceis 13 songs and cost 360', function () {
  var inputs = new function () {
    this.songCount = {0: 13}
  };
  equal(360, compute(inputs));
});
test('LP price: should return 360/13 + 360 = 387.70 when there is 14 songs', function () {
  var inputs = new function () {
    this.songCount = {0: 14}
  };
  equal(387.70, compute(inputs));
});
test('LP price: should return 360/13*7 + 360 = 515.39 when there is 20 songs', function () {
  var inputs = new function () {
    this.songCount = {0: 20}
  };
  equal(553.85, compute(inputs));
});
test('with stem mastering', function () {
  var inputs = new function () {
    this.stem = 1;
    this.songCount = {0: 1};
  };
  equal(12 + 35, compute(inputs));
});
test('with stem mastering with 2 songs', function () {
  var inputs = new function () {
    this.stem = 2;
    this.songCount = {0: 2};
  };
  equal(12 * 2 + 35 * 2, compute(inputs));
});
test('with stem mastering with 7 songs', function () {
  var inputs = new function () {
    this.stem = 7;
    this.songCount = {0: 7};
  };
  equal(12 * 7 + 210, compute(inputs));
});
test('with 3 stem mastering with 7 songs', function () {
  var inputs = new function () {
    this.stem = 3;
    this.songCount = {0: 7};
  };
  equal(12 * 3 + 210, compute(inputs));
});

test('with extra loud with 1 song', function () {
  var inputs = new function () {
    this.extraLoud = true;
    this.songCount = {0: 1};
  };
  equal(12 + 35, compute(inputs));
});
test('with extra loud with 7 songs', function () {
  var inputs = new function () {
    this.extraLoud = true;
    this.songCount = {0: 7};
  };
  equal(12 * 7 + 210, compute(inputs));
});
test('with extra loud with 14 songs', function () {
  var inputs = new function () {
    this.extraLoud = true;
    this.songCount = {0: 14};
  };
  equal(12 * 14 + 387.70, compute(inputs));
});
test('with DDP coding', function () {
  var inputs = new function () {
    this.ddpCoding = true;
    this.physicDelivery = false;
    this.songCount = {0: 1};
  };
  equal(30 + 35, compute(inputs));
});
test('with DDP coding and press delivery', function () {
  var inputs = new function () {
    this.ddpCoding = true;
    this.physicDelivery = true;
    this.songCount = {0: 1};
  };
  equal(30 + 20 + 35, compute(inputs));
});
test('with DDP coding and numeric press delivery', function () {
  var inputs = new function () {
    this.ddpCoding = true;
    this.numericDelivery = true;
    this.songCount = {0: 1};
  };
  equal(30 + 10 + 35, compute(inputs));
});
test('with postal sending', function () {
  var inputs = new function () {
    this.postalSending = true;
    this.songCount = {0: 1};
  };
  equal(15 + 35, compute(inputs));
});
test('with pbo instru', function () {
  var inputs = new function () {
    this.pboInstru = 1;
    this.songCount = {0: 1};
  };
  equal(35 + 12, compute(inputs));
});
test('with pbo instru and 7 songs', function () {
  var inputs = new function () {
    this.pboInstru = 7;
    this.songCount = {0: 7};
  };
  equal(30 * 7 + 12 * 7, compute(inputs));
});
test('with 1 song between 5 and 9 minutes give 35 + 35/2 = 52,5', function () {
  var inputs = new function () {
    this.songCount = {1: 1};
  };
  equal(52.5, compute(inputs));
});
test('with 1 song between 10 and 14 minutes give 35 + 35*2/2 = 70', function () {
  var inputs = new function () {
    this.songCount = {2: 1};
  };
  equal(70, compute(inputs));
});
test('with 1 song between 15 and 19 minutes give 35 + 35*3/2 = 87,50', function () {
  var inputs = new function () {
    this.songCount = {3: 1};
  };
  equal(87.50, compute(inputs));
});
test('with 1 basic song and 1 song between 5 and 9 minutes give 35 * 2 + 35/2 = 87,5', function () {
  var inputs = new function () {
    this.songCount = {0: 1, 1: 1};
  };
  equal(87.5, compute(inputs));
});
test('with 4 basic songs and 2 songs between 5 and 9 minutes give 180 + 30 / 2 * 2 = 210', function () {
  var inputs = new function () {
    this.songCount = {0: 4, 1: 2};
  };
  equal(210, compute(inputs));
});
