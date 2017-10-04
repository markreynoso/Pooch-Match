'use strict';
var app = app || {};

(function(module){
  let renderName = function(dogName){
    let $template = Handlebars.compile($('#breedMatch-template').html());
    return $template(dogName)
  }
  function appendBreeds(breed){
    $('#breedList').append(renderName(breed));
  }
  module.appendBreeds = appendBreeds;
})(app);
