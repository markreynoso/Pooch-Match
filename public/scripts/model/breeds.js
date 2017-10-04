'use strict';
var app = app || {};
(function(module){
  module.dogData;
  module.adoptablePets = [];

  function AdoptablePet(name, breeds, address, city, email, phone, state, zip, picture, sex){
    this.name = name;
    this.breeds = breeds;
    this.address = address;
    this.city = city;
    this.email = email;
    this.phone = phone;
    this.state = state;
    this.zip = zip;
    this.picture = picture;
    this.sex = sex;
  }
  module.AdoptablePet = AdoptablePet;

})(app);
