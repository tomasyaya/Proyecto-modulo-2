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

  // $(".button-name-editar").click(function (event) {
  //   let $this=$(this);
  //   let $box= $this.parent().parent().siblings(".form-container")
  //   $box.find(".edit-container").toggleClass("hidden");
  //   $(this).parent().find(".card-body").addClass("hidden");
  // });

  $(".button-name-editar").click(function (event){
    let popup = $("myPopup");
    popup.toggleClass("show");
  }

  
  

})