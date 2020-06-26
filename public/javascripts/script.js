document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


$(document).ready(function () {

  //boton añadir restaurante
  $(".addRestaurante").click(event => {
    $("#profile-container").removeClass("hidden");
  });

  //introducir PIN 
  $(".irMenu").click(event => {
    let pin = $(".pinInput").val();
    window.location.href = `/${pin}`
  })

  //CATEGORIAS DE LA CARTA
  $(".menu-name").click(function (event) {
    $(this).parent().find(".menu-container").toggleClass("hidden");
  });

  //editar restaurante
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

  //selectionar tipo de menu (carta o menu)
  $("#tipoDeMenu").change(function (event){
    let selec=$(this).val();
    if(selec=="menu"){
      $(this).parent().find(".labelNombreMenu").show();
      $(this).parent().find(".inputNombreMenu").removeClass("hidden");
      $(this).parent().find(".labelPrecio").show();
      $(this).parent().find(".inputPrecio").removeClass("hidden");
      $(this).parent().find(".labelInfoMenu").show();
      $(this).parent().find(".inputInfoMenu").removeClass("hidden");
    }
    else{
      $(this).parent().find(".labelNombreMenu").hide();
      $(this).parent().find(".inputNombreMenu").addClass("hidden");
      $(this).parent().find(".labelPrecio").hide();
      $(this).parent().find(".inputPrecio").addClass("hidden");
    }
    
  })
  

})