import Ember from 'ember';
import Calculator from "../models/calculator";

export default Ember.Route.extend({
  model: function() {
    return Calculator.create();
  }
});