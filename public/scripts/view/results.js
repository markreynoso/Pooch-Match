'use strict';
var app = app || {};

(function(module){
  toHtml = function(potato){
    let $template = Handlebars.compile($('#breedMatch-template').html());
    return $template(potato)
  }
  module.appendBreeds = function(){
    app.dogData.forEach(function(breed){
      $('#breedList').append(toHtml(breed));
    })
  }
  
})(app);
