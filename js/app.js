var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend();
App.ApplicationView = Ember.View.extend({
  templateName: 'application',
  title: 'Calculator',
  songCountSelected: 0,
  stem : false,
  extraLoud : false,
  ddpCoding : false,
  pressDelivery : false,
  postalSending : false,

  result: function () {
    var self = this,
      inputs = new function () {
        this.songCount = {0: self.get('songCountSelected')};
        this.stem = self.get('stem');
        this.extraLoud = self.get('extraLoud');
        this.ddpCoding = self.get('ddpCoding');
        this.pressDelivery = self.get('pressDelivery');
        this.pboInstru = 5;
        this.postalSending = self.get('postalSending');
      };
    return compute(inputs);
  }.property('songCountSelected', 'stem', 'extraLoud', 'ddpCoding', 'pressDelivery', 'postalSending'),

  songCounts: function () {
    var result = [];
    for(var i=1 ; i < 25 ; i++) {
      result.pushObject(i);
    }
    return result;
  }.property(),


});

App.initialize();