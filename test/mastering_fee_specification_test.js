test("Big simulation 360 + 360/13/2 + 12*13 + 12*13 + 30 + 20 + 10 + 12*5 + 15", function () {
  var inputs = new function () {
    this.songCount = {0: 12, 1: 1, 2: 0, 3: 0};
    this.stem = 13;
    this.extraLoud = true;
    this.ddpCoding = true;
    this.physicDelivery = true;
    this.numericDelivery = true;
    this.pboInstru = 5;
    this.postalSending = true;
  };
  var result = compute(inputs);
  console.log(inputs);
  console.log('Result = ', result);
  equal(820.85, result);
});
