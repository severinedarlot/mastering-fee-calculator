var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend();
App.ApplicationView = Ember.View.extend({
  templateName: 'application',
  title: 'Calculator',
  songCountSelected: 0,
  stem : false,

  result: function () {
    var self = this,
      inputs = new function () {
        this.songCount = {0: self.get('songCountSelected')};
        this.stem = self.get('stem');
        this.extraLoud = true;
        this.ddpCoding = true;
        this.pressDelivery = true;
        this.pboInstru = 5;
        this.postalSending = true;
      };
    return compute(inputs);
  }.property('songCountSelected', 'stem'),

  songCounts: function () {
    var result = [];
    for(var i=1 ; i < 25 ; i++) {
      result.pushObject(i);
    }
    return result;
  }.property(),


});

App.initialize();