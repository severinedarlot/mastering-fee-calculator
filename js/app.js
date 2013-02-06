var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend();
App.ApplicationView = Ember.View.extend({
  templateName: 'application',
  title: 'Calculator',
  songs: null,
  songCountSelected: 0,
  stem : false,
  extraLoud : false,
  ddpCoding : false,
  pressDelivery : false,
  postalSending : false,
  pboCountSelected : 0,
  fiveTenCountSelected : 0,
  tenFifteenCountSelected : 0,
  fifteenTwentyCountSelected : 0,

  init: function () {
    this._super();
    this.set('songs', []);
  },

  result: function () {
    var self = this,
      inputs = new function () {
        this.songCount = {
          0: self.get('songCountSelected'),
          1: 0,
          2: 0,
          3: 0
        };
        this.stem = 0;
        this.extraLoud = self.get('extraLoud');
        this.ddpCoding = self.get('ddpCoding');
        this.pressDelivery = self.get('pressDelivery');
        this.pboInstru = 0;
        this.postalSending = self.get('postalSending');
      };
    return compute(inputs);
  }.property('songCountSelected', 'extraLoud', 'ddpCoding', 'pressDelivery', 'postalSending'),

  songCounts: function () {
    var result = [];
    for(var i=0 ; i < 25 ; i++) {
      result.pushObject(i);
    }
    return result;
  }.property(),

  hasSong: function () {
    return this.get('songCountSelected') > 0;
  }.property('songCountSelected'),

  createSongs: function () {
    console.log('create songs');
    if(this.get('songs.length') < this.get('songCountSelected')) {
      for (var i = this.get('songs.length') ; i < this.get('songCountSelected'); i++) {
        console.log('create song ' + (i+1));
        this.get('songs').pushObject(App.Song.create({number: i+1}));
      }
    } else {
      // TODO: remove items or only hide them
    }
  }.observes('songCountSelected')


});

App.initialize();