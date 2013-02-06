App.Song = Ember.Object.extend({
  number: null,
  length: 0,
  stem: false,
  instrumental: false,
  lengthMove: function () {
    console.log('length move', this.get('length'));
  }.observes('length')
});

App.durations = [
  Ember.Object.create({label: "0-5mn", id: 0}),
  Ember.Object.create({label: "5-10mn", id: 1}),
  Ember.Object.create({label: "10-15mn", id: 2}),
  Ember.Object.create({label: "15-20mn", id: 3}),
  Ember.Object.create({label: "20-25mn", id: 4}),
  Ember.Object.create({label: "25-30mn", id: 5}),
  Ember.Object.create({label: "30-35mn", id: 6}),
  Ember.Object.create({label: "35-40mn", id: 7}),
  Ember.Object.create({label: "40-45mn", id: 8}),
  Ember.Object.create({label: "45-50mn", id: 9}),
  Ember.Object.create({label: "50-55mn", id: 10}),
  Ember.Object.create({label: "55-60mn", id: 11})
];