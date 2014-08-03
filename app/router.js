import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MasteringFeeCalculatorENV.locationType
});

Router.map(function() {
  this.resource('calculator', { path: '/' });

});

export default Router;
