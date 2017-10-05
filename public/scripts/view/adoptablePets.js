'use strict';

var app = app || {};

(function(module){
  let renderMatch = function(dogName){
    let $template = Handlebars.compile($('#adoptablePet-template').html());
    return $template(dogName)
  }
  function appendMatches(event){
    $('#breedSelection').empty();
    if (!app.adoptablePets.reduce((agg, dog) => agg.concat(dog.breeds), []).includes(event.target.innerText)){
      $('main').append(`<div id="noPets"><h3>Sorry, the ${event.target.innerText} breed is currently unavailable for adoption in your area.</h3><p>To look consider another breed, click below</p><button name="tryAgain">Try Again</button></div>`);
      $('#noPets button').on('click', function(){
        $('#noPets').remove();
        $('#breedSelection').hide();
        $('#breedList').show();
      })
    } else {
      for (var i = 0; i < app.adoptablePets.length; i++) {
        if (app.adoptablePets[i].breeds.includes(event.target.innerText)) {
          $('#breedSelection').append(renderMatch(app.adoptablePets[i]));
        }
      }
    }
  }
  module.appendMatches = appendMatches;
})(app);
