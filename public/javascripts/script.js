document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);



$(document).ready(function(){

  $(".addRestaurante").click(event=>{
    $("#profile-container").removeClass("hidden");
  });

  $(".irMenu").click(event=>{
    let pin=$(".pinInput").val();
    window.location.href = `/${pin}`
  })
  // $.post('/api/restaurante/:id/editar', function(resultado){

  // })
})