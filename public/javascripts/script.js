document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


$(document).ready(function () {

  $(".addRestaurante").click(event => {
    $("#profile-container").toggleClass("hidden");
  });

  $(".irMenu").click(event => {
    let pin = $(".pinInput").val();
    window.location.href = `/${pin}`
  })

  $(".menu-name").click(function (event) {
    $(this).parent().find(".menu-container").toggleClass("hidden");
  });


  $(".button-name-editar").click(function (event){
    let $this=$(this);
    let $box=$this.parent();
    let nombre=$box.find(".card-title").text();
    let calle=$box.find(".calle-text").text();
    let numero=$box.find(".numero-text").text();
    let horario=$box.find(".horario-text").text();
    let formulario= $(".edit-container");
    formulario.find("#nombreRestauranteEdit").val(nombre); 
    formulario.find("#calleRestauranteEdit").val(calle); 
    formulario.find("#numeroRestauranteEdit").val(numero); 
    formulario.find("#horarioRestauranteEdit").val(horario); 
    let id = $(this).parent().find(".id-editar").val();
    formulario.attr("action", `/api/restaurante/${id}/editar`);



  })

  
  

})