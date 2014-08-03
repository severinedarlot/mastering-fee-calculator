import Ember from 'ember';

var Calculator = Ember.Object.extend({
  less4: 4,
  between4and8: 2,
  more8: 1,
  totalCount: function () {
    return parseInt(this.get('less4')) + parseInt(this.get('between4and8')) + parseInt(this.get('more8'));
  }.property('less4', 'between4and8', 'more8')
});

export default Calculator;