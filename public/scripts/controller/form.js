'use strict';
$('#dog-form').on('submit', function(event){
  event.preventDefault();

  console.log(event);
  let query1, query2, query3, query4, query5, query6, query7, query8, query9, query10, query11, query12, query13;

  if(event.target.allergy.checked){
    query1 = `allergies='true'`
  }else{
    query1 = `allergies='true' OR allergies='false'`
  }

  if(event.target.kids.checked){
    query2 = query1 + ` AND kids='true'`
  }else{
    query2 = query1;
  }
  if(event.target.energy.value === 1){
    query3 = query2 + ` AND activityLevel BETWEEN 1 AND 3`
  }else if(event.target.energy.value === 2){
    query3 = query2 + ` AND activityLevel BETWEEN 4 AND 6`
  }else{
    query3 = query2 + ` AND activityLevel BETWEEN 7 AND 10`
  }

  if(!event.target.size1.checked){
    query4 = query3 + ` AND NOT size='tiny'`
  }else{
    query4 = query3;
  }
  if(!event.target.size2.checked){
    query5 = query4 + ` AND NOT size='small'`
  }else{
    query5 = query4;
  }
  if(!event.target.size3.checked){
    query6 = query5 + ` AND NOT size='medium'`
  }else{
    query6 = query5;
  }
  if(!event.target.size4.checked){
    query7 = query6 + ` AND NOT size='large'`
  }else{
    query7 = query6;
  }
  if(!event.target.size5.checked){
    query8 = query7 + ` AND NOT size='giant'`
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
    query9 = query8;
  }

  if(event.target.grooming.value === 1){
    query10 = query9 + ` AND grooming BETWEEN 1 AND 4`
  }else if(event.target.grooming.value === 2){
    query10 = query9 + ` AND grooming BETWEEN 1 AND 7`
  }else{
    query10 = query9;
  }

  if(event.target.sheds.checked){
    query11 = query10;
  }else{
    query11 = query10 + ` AND sheds='false'`
  }

  if(event.target.yard.checked){
    query12 = query11;
  }else{
    query12 = query11 + ` AND yard='false'`
  }

  if(event.target.drools.checked){
    query13 = query12 + ` AND drools='false'`
  }else{
    query13 = query12;
  }
  debugger;
});
