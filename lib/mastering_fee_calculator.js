var compute = function (inputs) {
  var songCount = inputs.songCount,
    songPrice = 0,
    basicPrice = 35,
    epPrice = 180,
    lpPrice = 360,
    stemPrice = 12,
    extraLoudPrice = 12,
    ddpEncodagePrice = 30,
    pressDeliveryPrice = 40,
    price;
  if (songCount <6) {
    songPrice = basicPrice;
  } else if ( 6 <= songCount && songCount < 13 ) {
    songPrice = epPrice / 6;
  } else {
    songPrice = lpPrice / 13;
  }
  price = songPrice * songCount;
  if(inputs.stem) {
    price = price + songCount * stemPrice;
  }
  if(inputs.extraLoud) {
    price = price + songCount * extraLoudPrice;
  }
  if(inputs.ddpEncodage) {
    price = price + ddpEncodagePrice;
    if(inputs.pressDelivery) {
        price = price + pressDeliveryPrice;
    }
  }
  return Math.ceil(price * 100) / 100;
};

module.exports.compute = compute;


