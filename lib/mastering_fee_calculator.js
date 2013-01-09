var compute = function (song) {
  var songPrice = 0;
  if (song <6) {
    songPrice = 35;
  } else if ( 6 <= song && song < 13 ) {
    songPrice = 180 / 6;
  } else {
    songPrice = 338 / 13;
  }
  return songPrice*song;  
}

module.exports.compute = compute;
