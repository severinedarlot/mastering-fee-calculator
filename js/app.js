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
  physicDelivery : false,
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
    if (this.get('songCountSelected') === '') return 0;
    var self = this,
      inputs = new function () {
        this.songCount = self.computeTracksHash();
        this.stem = self.stemCount();
        this.extraLoud = self.get('extraLoud');
        this.ddpCoding = self.get('ddpCoding');
        this.physicDelivery = self.get('physicDelivery');
        this.pboInstru = self.pboInstruCount();
        this.postalSending = self.get('postalSending');
      };
    return compute(inputs);
  }.property('songCountSelected', 'extraLoud', 'ddpCoding', 'physicDelivery', 'postalSending', 'tracks.@each.length', 'tracks.@each.stem', 'tracks.@each.instrumental'),

  songCounts: function () {
    var result = [];
    result.pushObject('');
    for(var i=1 ; i < 31 ; i++) {
      result.pushObject(i);
    }
    return result;
  }.property(),

  hasSong: function () {
    return this.get('songCountSelected') > 0;
  }.property('songCountSelected'),

  tracks: function () {
    if (this.get('songCountSelected') === '') return [];
    if (this.get('songs.length') < this.get('songCountSelected')) {
      for (var i = this.get('songs.length') ; i < this.get('songCountSelected') ; i++) {
        this.get('songs').pushObject(App.Song.create({number: i+1}));
      }
    }
    if(!this.get('songs')) return [];
    return this.get('songs').filter(function (item, index) {
      return index < this.get('songCountSelected');
    }, this);
  }.property('songCountSelected'),

  pboInstruCount: function () {
    var result = 0;
    this.get('tracks').forEach(function (item) {
      if(item.get('instrumental')) {
        result++;
      }
    });
    return result;
  },

  stemCount: function () {
    var result = 0;
    this.get('tracks').forEach(function (item) {
      if(item.get('stem')) {
        result++;
      }
    });
    return result;
  },

  computeTracksHash: function () {
    var result = {};
    this.get('tracks').forEach(function (track) {
      var length = track.get('length');
      if(result[length]) {
        result[length]++;
      } else {
        result[length] = 1;
      }
    });
    return result;
  }
});

App.initialize();