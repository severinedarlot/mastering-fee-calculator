

var extra = function (songPrice, songCounts) {
  var extraPrice = 0;
  for (var coef in songCounts) {
    extraPrice = extraPrice + coef/2 * songPrice * songCounts[coef];
  }
  return extraPrice;
};

var compute = function (inputs) {
  var songCount = 0,
    songPrice = 0,
    basicPrice = 35,
    epPrice = 180,
    lpPrice = 360,
    stemPrice = 12,
    extraLoudPrice = 12,
    ddpCodingPrice = 30,
    pressDeliveryPrice = 40,
    postalSending = 15,
    pboInstruPrice = 12,
    price;

  for (var coef in inputs.songCount) {
    songCount = songCount + inputs.songCount[coef];
  }

  if (songCount <6) {
    songPrice = basicPrice;
  } else if ( 6 <= songCount && songCount < 13 ) {
    songPrice = epPrice / 6;
  } else {
    songPrice = lpPrice / 13;
  }
  price = songPrice * songCount + extra(songPrice, inputs.songCount);
  if(inputs.stem) {
    price = price + inputs.stem * stemPrice;
  }
  if(inputs.extraLoud) {
    price = price + songCount * extraLoudPrice;
  }
  if(inputs.ddpCoding) {
    price = price + ddpCodingPrice;
    if(inputs.physicDelivery) {
        price = price + pressDeliveryPrice;
    }
  }
  if(inputs.postalSending) {
    price = price + postalSending;
  }
  if(inputs.pboInstru) {
    price = price + inputs.pboInstru * pboInstruPrice;
  }
  return Math.ceil(price * 100) / 100;
};

module.exports.compute = compute;


