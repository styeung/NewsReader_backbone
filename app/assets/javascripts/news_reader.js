window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');

    NewsReader.feeds = new NewsReader.Collections.Feeds();
    NewsReader.feeds.fetch();

    new NewsReader.Routers.Router({
      "$rootEl": $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
