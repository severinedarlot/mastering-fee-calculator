var compute = function (inputs) {
  var songCount = inputs.songCount,
    songPrice = 0,
    price;
  if (songCount <6) {
    songPrice = 35;
  } else if ( 6 <= songCount && songCount < 13 ) {
    songPrice = 180 / 6;
  } else {
    songPrice = 360 / 13;
  }
  price = Math.ceil(songPrice * songCount * 100) / 100;
  if(inputs.stem) {
    price = price + songCount * 12;
  }
  return price;
}

module.exports.compute = compute;


