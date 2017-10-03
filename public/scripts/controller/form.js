'use strict';

var app = app || {};

(function(module){

  module.formData = function(){
    $('#dog-form').on('submit', function(event){
      event.preventDefault();

      let data = {
        allergy: event.target.allergy.checked,
        kids: event.target.kids.checked,
        energy: event.target.energy.value,
        size1: event.target.size1.checked,
        size2: event.target.size2.checked,
        size3: event.target.size3.checked,
        size4: event.target.size4.checked,
        size5: event.target.size5.checked,
        trainable: event.target.trainable.value,
        grooming: event.target.grooming.value,
        sheds: event.target.sheds.checked,
        yard: event.target.yard.checked,
        drools: event.target.drools.checked,
        zip: event.target.zipCode.value
      };

      $.get('/dbpull', data)
        .then(results => module.dogData = results.rows)
        .then(console.log(module.dogData))
    });
  }
  module.formData();
})(app);
