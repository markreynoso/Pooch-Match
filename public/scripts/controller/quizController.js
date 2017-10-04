'use strict';
var app = app || {};

(function(module) {
  const quizController = {};

  quizController.index = () => {
    $('#quiz').show().siblings().hide();
    $('#results-link').hide();
    if (app.dogData) {
      $('#results-link').show();
    }
    app.quizView();
  };

  module.quizController = quizController;
})(app);
