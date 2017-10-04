'use strict';
var app = app || {};
(function(module){
  module.dogData;
  module.adoptablePets = [];

  function AdoptablePet(name, breeds, contact, picture, sex){
    this.name = name;
    this.breeds = breeds;
    this.contact = contact;
    this.picture = picture;
    this.sex = sex;
  }
  module.AdoptablePet = AdoptablePet;

})(app);
