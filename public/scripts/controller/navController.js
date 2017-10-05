'use strict';


$(window).on('resize', function(){
  window.screen.width > 650 ? $('#navlist').show() : $('#navlist').hide();
})
