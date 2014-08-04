import Ember from 'ember';

var Calculator = Ember.Object.extend({
  basicPrice: 48,

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
      songPrice = this.get('basicPrice') * this.get('totalCount');
    }
    return songPrice;
  }.property('totalCount'),

  htPrice: function () {
    return this.get('titlesPrice');
  }.property('titlesPrice')
});

export default Calculator;