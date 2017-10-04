'use strict';

var app = app || {};

(function(module){
  let renderMatch = function(dogName){
    let $template = Handlebars.compile($('#adoptablePet-template').html());
    return $template(dogName)
  }
  function appendMatches(event){
    for (var i = 0; i < app.adoptablePets.length; i++) {
      if (app.adoptablePets[i].breeds.includes(event.target.innerText)) {

        $('#breedSelection').append(renderMatch(app.adoptablePets[i]));
      }
    }
  }
  module.appendMatches = appendMatches;
})(app);
