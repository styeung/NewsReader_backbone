NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow"
  },

  feedIndex: function () {
    var view = new NewsReader.Views.FeedIndex({
      collection: NewsReader.feeds
    });

    this.$rootEl.html(view.render().$el);
  },

  feedShow: function(id) {
    var view = new NewsReader.Views.FeedShow({
      model: NewsReader.feeds.getOrFetch(parseInt(id))
    });

    this.$rootEl.html(view.render().$el);
  }
});