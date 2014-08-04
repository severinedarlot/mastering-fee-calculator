import Ember from 'ember';

var Calculator = Ember.Object.extend({
  basicPrice: 48,
  epPrice: 270,
  lpPrice: 520,

  firstSliceCount: 0,
  secondSliceCount: 0,
  thirdSliceCount: 0,
  fourthSliceCount: 0,

  totalCount: function () {
    return parseInt(this.get('firstSliceCount')) + 
      parseInt(this.get('secondSliceCount')) + 
      parseInt(this.get('thirdSliceCount')) + 
      parseInt(this.get('fourthSliceCount'));
  }.property('firstSliceCount', 'secondSliceCount', 'thirdSliceCount', 'fourthSliceCount'),

  titlesPrice: function () {
    var songPrice = 0;
    if (this.get('totalCount') < 6) {
      songPrice = this.get('basicPrice');
    } else if ( 6 <= this.get('totalCount') && this.get('totalCount') < 13 ) {
      songPrice = this.get('epPrice') / 6;
    } else {
      songPrice = this.get('lpPrice') / 13;
    }
    return songPrice * this.get('totalCount');
  }.property('totalCount'),

  htPrice: function () {
    return this.get('titlesPrice');
  }.property('titlesPrice')
});

export default Calculator;