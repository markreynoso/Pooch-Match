'use strict';

var app = app || {};

(function(module){

  module.formData = function(callback){
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
        // console.log(response.petfinder.pets.pet[1].contact.address1);
        // debugger;
        for (var i = 0; i < response.petfinder.pets.pet.length; i++) {
          app.adoptablePets.push(new app.AdoptablePet(
            response.petfinder.pets.pet[i].name.$t,

            Array.isArray(response.petfinder.pets.pet[i].breeds.breed) ? response.petfinder.pets.pet[i].breeds.breed.map(obj => obj.$t) : [response.petfinder.pets.pet[i].breeds.breed.$t],

            response.petfinder.pets.pet[i].contact.address1.$t,
            response.petfinder.pets.pet[i].contact.city.$t,
            response.petfinder.pets.pet[i].contact.email.$t,
            response.petfinder.pets.pet[i].contact.phone.$t,
            response.petfinder.pets.pet[i].contact.state.$t,
            response.petfinder.pets.pet[i].contact.zip.$t, response.petfinder.pets.pet[i].media.photos.photo.filter(function(photo){return (photo['@size'] === 'x' && photo['@id'] === '1');})[0].$t, response.petfinder.pets.pet[i].sex.$t

        console.log(response.petfinder.pets.pet[0].media.photos.photo);

        for (var i = 0; i < response.petfinder.pets.pet.length; i++) {
          app.adoptablePets.push(new app.AdoptablePet(
            response.petfinder.pets.pet[i].name.$t,
            response.petfinder.pets.pet[i].breeds,
            response.petfinder.pets.pet[i].contact, response.petfinder.pets.pet[i].media.photos.photo.filter(function(photo){return (photo['@size'] === 'x' && photo['@id'] === '1');})[0].$t, response.petfinder.pets.pet[i].sex.$t


          ));


          // app.adoptablePets.name = response.petfinder.pets.pet[i].name;
          // app.adoptablePets.breeds = response.petfinder.pets.pet[i].breeds;
          // app.adoptablePets.contact = response.petfinder.pets.pet[i].contact;
          // app.adoptablePets.sex = response.petfinder.pets.pet[i].sex;
          // app.adoptablePets.photo = response.petfinder.pets.pet[i].media.photos.photo.filter(function(photo){return (photo['@size'] === 'x' && photo['@id'] === '1');})[0].$t;

        }
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
    callback();
  }

  module.formData(app.appendBreeds);
  
  app.appendBreeds();
})(app);
