'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    $('#results-link').hide();
    if (app.dogData) {
      $('#results-link').show();
    }
  };

  module.aboutController = aboutController;
})(app);
