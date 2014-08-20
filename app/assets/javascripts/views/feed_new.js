NewsReader.Views.FeedNew = Backbone.View.extend({
  template: JST["feed_new"],

  events: {
    "submit #new-feed": "createFeed"
  },

  render: function() {
    var content = this.template({feed: this.model });
    this.$el.html(content);

    return this;
  },

  createFeed: function(event){
    event.preventDefault();
    var form = $("#new-feed").serializeJSON();
    console.log("here is the form: ", form);
    var that = this;

    NewsReader.feeds.create(form, {
      success: function (feed) {
        Backbone.History.navigate("#/feeds/" + feed.id);
      },
      error: function(feed, errors) {
        that.$el.before(errors);
        that.model = feed;
        that.render();
      }
    });

  }
});