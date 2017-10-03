'use strict';

var app = app || {};

(function(module){

  module.formData = function(){
    $('#dog-form').on('submit', function(event){
      event.preventDefault();

      function apiLoop() {
        for (var i = 0; i < app.dogData.length; i++) {
          console.log(app.dogData[i]);
          $.get(`/find/${app.dogData[i].name}/${data.zip}`)
          .then(filterPets);
        }
      }

      function filterPets(response) {
        console.log(response);
      }

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
        .then(results => app.dogData = results)
        .then(apiLoop);
    });
  }
  module.formData();
})(app);
