NewsReader.Views.FeedIndex = Backbone.View.extend({
  template: JST["feed_index"],

  events: {
    "click .feed-delete": "deleteFeed"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({ feeds: this.collection });

    this.$el.html(content);

    var newView = new NewsReader.Views.FeedNew({
      model: {}
    });

    this.$el.prepend(newView.render().$el);

    return this;
  },

  deleteFeed: function(event) {
    var feedId = event.currentTarget.attr("data-id");
    this.collection.get(feedId).destroy({
      success: this.render.bind(this)
    });
  }
})