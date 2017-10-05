'use strict';

var app = app || {};

page('/', app.quizController.index);

page('/results', app.resultsController.index);

page('/about', app.aboutController.index);

page();

$('#results-link').on('click', function(){
  $('#breedSelection').hide();
  $('#breedList').show();
  app.resultsController.index();
});
