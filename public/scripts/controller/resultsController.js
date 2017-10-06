'use strict';
var app = app || {};

(function(module) {
  const resultsController = {};

  resultsController.index = () => {
    $('#results').show().siblings().hide();
    $('#results-link').show();
    module.breedListener();
  };

  module.breedListener = function(){
    $('#breedList').off('click').on('click', '.breed-match', function(event){
      event.stopPropagation();
      $('#breedList').hide();
      $('#breedSelection').show();
      app.appendMatches(event);
    })
  }
  module.resultsController = resultsController;

})(app);
