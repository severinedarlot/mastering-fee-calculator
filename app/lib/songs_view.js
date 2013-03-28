App.SongsView = Ember.CollectionView.extend({
  tagName: 'table',
  itemViewClass: Ember.View.extend({
    templateName: "song_line"
  })
});