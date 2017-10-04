'use strict';
var app = app || {};

(function(module){
  module.quizView = function(){
    $('.quiz-page').hide();
    $('#instructions').show();
    $('#show-quiz').on('click', function(){
      $('#instructions').hide();
      $('#the-quiz').show();
    })
  }

})(app)
