'use strict';
var app = app || {};

(function(module) {
  const quizController = {};

  app.quizView();
  quizController.index = () => {
    $('#quiz').show().siblings().hide();
    $('#results-link').hide();
    if (app.dogData) {
      $('#results-link').show();
    }
  };
  module.quizController = quizController;
})(app);
