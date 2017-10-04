'use strict';

var app = app || {};

page('/', app.quizController.index);

page('/results', app.resultsController.index);

page('/about', app.aboutController.index);

page();
