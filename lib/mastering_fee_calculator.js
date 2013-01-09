var compute = function (song) {
  var songPrice = 0;
  if (song <6) {
    songPrice = 35;
  } else if ( 6 <= song && song < 13 ) {
    songPrice = 180 / 6;
  } else {
    songPrice = 335 / 13;
  }
  return Math.ceil(songPrice*song*100)/100;  
}

module.exports.compute = compute;


