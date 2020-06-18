document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);



$(document).ready(function(){

  $(".addRestaurante").click(event=>{
    $("#profile-container").removeClass("hidden");
  });

  // $.post('/api/restaurante/:id/editar', function(resultado){

  // })
})