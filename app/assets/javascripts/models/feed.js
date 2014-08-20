NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: 'api/feeds',

  parse: function (jsonResp) {
    if (jsonResp.latest_entries) {
      this.entries().set(jsonResp.latest_entries, { parse: true });
      delete jsonResp.latest_entries;
    }

    return jsonResp;
  },

  entries: function() {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries([], {
        feed: this,
        comparator: function(e1, e2){
          return (e1.get("published_at") >= e2.get("published_at")) ? -1 : 1;
        }
      });
    }

    return this._entries;
  }
});