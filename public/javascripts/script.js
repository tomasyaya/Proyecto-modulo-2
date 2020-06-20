document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);



$(document).ready(function(){

  $(".addRestaurante").click(event=>{
    $("#profile-container").toggleClass("hidden");
  });

  $(".irMenu").click(event=>{
    let pin=$(".pinInput").val();
    window.location.href = `/${pin}`
  })

  $(".menu-name").click(function(event){
    $(this).parent().find(".menu-container").toggleClass("hidden");
  });


  // $.post('/api/restaurante/:id/editar', function(resultado){

  // })
})