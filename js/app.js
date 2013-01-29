var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend();
App.ApplicationView = Ember.View.extend({
  templateName: 'application',
  title: 'Calculator',
  songCounts: [1, 2, 3, 4],
  songCountSelected: 0,
  result: function () {
    var self = this,
      inputs = new function () { this.songCount = {0: self.get('songCountSelected')}};
    return compute(inputs);
  }.property('songCountSelected')
});

App.initialize();