import Ember from 'ember';

var Calculator = Ember.Object.extend({
  basicPrice: 48,
  epPrice: 270,
  lpPrice: 520,
  tva: 20,

  firstSliceCount: 0,
  secondSliceCount: 0,
  thirdSliceCount: 0,
  fourthSliceCount: 0,
  stems: false,

  totalCount: function () {
    return parseInt(this.get('firstSliceCount')) + 
      parseInt(this.get('secondSliceCount')) + 
      parseInt(this.get('thirdSliceCount')) + 
      parseInt(this.get('fourthSliceCount'));
  }.property('firstSliceCount', 'secondSliceCount', 'thirdSliceCount', 'fourthSliceCount'),

  stemsTotalPrice: function () {
    if (this.get('stems')) {
      return Math.ceil(this.get('titlesPrice') * 20 / 100);
    } 
    return 0;
  }.property('stems', 'titlesPrice'),

  titlesPrice: function () {
    var songPrice = 0;
    if (this.get('totalCount') < 6) {
      songPrice = this.get('basicPrice');
    } else if ( 6 <= this.get('totalCount') && this.get('totalCount') < 13 ) {
      songPrice = this.get('epPrice') / 6;
    } else {
      songPrice = this.get('lpPrice') / 13;
    }
    return songPrice * this.get('totalCount') + 
      this.secondExtra(songPrice) + this.thirdExtra(songPrice) + this.fourthExtra(songPrice);
  }.property('totalCount'),

  htPrice: function () {
    return this.get('titlesPrice') + this.get('stemsTotalPrice');
  }.property('titlesPrice', 'stemsTotalPrice'),

  ttcPrice: function () {
    return this.get('htPrice') + this.get('htPrice') * this.get('tva') / 100;
  }.property('htPrice'),

  secondExtra: function (songPrice) {
    return 1/2 * songPrice * parseInt(this.get('secondSliceCount'));
  },

  thirdExtra: function (songPrice) {
    return 2/2 * songPrice * parseInt(this.get('thirdSliceCount'));
  },

  fourthExtra: function (songPrice) {
    return 3/2 * songPrice * parseInt(this.get('fourthSliceCount'));
  }

});

export default Calculator;