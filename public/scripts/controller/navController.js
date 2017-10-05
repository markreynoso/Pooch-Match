'use strict';

$('#menu-icon').on('click', function(){
  $('#navlist').toggle();
});

// $('#navlist').on('click', function(){
//   $('#navlist').toggle();
// });

$(window).on('resize', function(){
  window.screen.width > 650 ? $('#navlist').show() : $('#navlist').hide();
})

// $('#noBreeds').on('click', function(){
//   app.quizController.index();
// })
