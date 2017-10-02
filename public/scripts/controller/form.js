'use strict';
$('#dog-form').on('submit', function(event){
  event.preventDefault();
  debugger;
  console.log(event);
  let query1, query2, query3, query4, query5, query6, query7, query8, query9, query10, query11, query12, query13;

  if(event.target.allergy.value === on){
    query1 = `allergies='true'`
  }else{
    query1 = `allergies=*`
  }

  if(event.target.kids.value === on){
    query2 = query1 + ` AND kids='true'`
  }else{
    query2 = query1 + ` AND kids=*`
  }
  if(event.target.energy.value === 1){
    query3 = query2 + ` AND energy BETWEEN 1 AND 3`
  }else if(event.target.energy.value === 2){
    query3 = query2 + ` AND energy BETWEEN 4 AND 6`
  }else{
    query3 = query2 + ` AND energy BETWEEN 7 AND 10`
  }

  if(event.target.size1.value === on){
    query4 = query3 + ` AND size='tiny'`
  }else{
    query4 = query3;
  }
  if(event.target.size2.value === on){
    query5 = query4 + ` AND size='small'`
  }else{
    query5 = query4;
  }
  if(event.target.size3.value === on){
    query6 = query5 + ` AND size='medium'`
  }else{
    query6 = query5;
  }
  if(event.target.size4.value === on){
    query7 = query6 + ` AND size='large'`
  }else{
    query7 = query6;
  }
  if(event.target.size5.value === on){
    query8 = query7 + ` AND size='giant'`
  }else{
    query8 = query7;
  }

  if(event.target.trainable.value === 1){
    query9 = query8 + ` AND trainable BETWEEN 8 AND 10`
  }else if(event.target.trainable.value === 2){
    query9 = query8 + ` AND trainable BETWEEN 6 AND 10`
  }else if(event.target.trainable.value === 3){
    query9 = query8 + ` AND trainable BETWEEN 3 AND 10`
  }else{
    query9 = query8 + ` AND trainable=*`
  }

  if(event.target.grooming.value === 1){
    query10 = query9 + ` AND grooming BETWEEN 1 AND 4`
  }else if(event.target.grooming.value === 2){
    query10 = query9 + ` AND grooming BETWEEN 1 AND 7`
  }else{
    query10 = query9 + ` AND grooming=*`
  }

  if(event.target.sheds.value === on){
    query11 = query10 + ` AND sheds=*`
  }else{
    query11 = query10 + ` AND sheds='false'`
  }

  if(event.target.yard.value === on){
    query12 = query11 + ` AND yard=*`
  }else{
    query12 = query11 + ` AND yard='false'`
  }

  if(event.target.drools.value === on){
    query13 = query12 + ` AND drools='false'`
  }else{
    query13 = query12 + ` AND drools=*`
  }

});
