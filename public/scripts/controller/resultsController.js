'use strict';
var app = app || {};

(function(module) {
  const resultsController = {};

  resultsController.index = () => {
    $('#results').show().siblings().hide();
    $('#results-link').hide();
  };

})(app);
