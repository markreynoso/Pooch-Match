'use strict';
var app = app || {};

(function(module){
  let renderName = function(dogName){
    let $template = Handlebars.compile($('#breedMatch-template').html());
    return $template(dogName)
  }
  function appendBreeds(){
    app.dogData.forEach(function(breed){
      $('#breedList').append(renderName(breed.name));
      console.log('I am making stuff');
    })
  }
})(app);
