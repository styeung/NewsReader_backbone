NewsReader.Models.Entry = Backbone.Model.extend({
  parse: function(jsonResp) {
    console.log("jsonResp.json", jsonResp.json);

    if(jsonResp.json) {
      this._json = $.parseJSON(jsonResp.json).description;
      var htmlStart = this._json.indexOf("\u0026lt");

      if(htmlStart === -1) {
        this._description = this.htmlDecode(this._json);
      }
      else {
        this._description = this.htmlDecode(this._json.slice(0, htmlStart));
      }

      delete jsonResp.json;
    }

    return jsonResp;
  },

  htmlDecode: function(value) {
    return $('<div>').html(value).text();
  }
});