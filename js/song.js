App.Song = Ember.Object.extend({
  number: null,
  length: 0,
  stem: false,
  instrumental: false
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
  Ember.Object.create({label: "55-60mn", id: 11}),
  Ember.Object.create({label: "55-60mn", id: 12}),
  Ember.Object.create({label: "60-65mn", id: 13}),
  Ember.Object.create({label: "65-70mn", id: 14}),
  Ember.Object.create({label: "70-75mn", id: 15}),
  Ember.Object.create({label: "70-80mn", id: 16})
];