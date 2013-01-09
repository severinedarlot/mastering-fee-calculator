var compute = function (song) {
  if (song <6) {
    return 35*song;  
  } else if ( 6 <= song && song < 13 ) {
    return 180;
  } else {
    return 335;
  }
  
}

module.exports.compute = compute;
