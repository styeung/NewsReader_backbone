NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feed_show"],
  entryTemplate: JST["entry_show"],

  events: {
    "click #refresh": "refreshFeed"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var that = this;

    var content = this.template({
      feed: this.model
    });

    this.$el.html(content);

    this.model.entries().each(function(entry) {
      $("ul#entries").append(that.entryTemplate({ entry: entry }));
    });

    return this;
  },

  refreshFeed: function() {
    this.model.fetch({
      success: this.render.bind(this)
    });
  },


});