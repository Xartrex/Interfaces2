$(document).ready(function(){

 // When the user clicks on <div>, close the box
 $('.cruz').on('click', function(){
      if(confirm('¿Seguro que quieres borrar la caja?'))
      this.parentElement.style.display = 'none';
      else;
    });

$('.like').on('click', function(){
  $(this).children("div").children("img").attr("src","images/corazon.jpg");

  /* Esto es para poder añadir la posibilidad de revertir el like pero no funciona

  var x = $(this).children("div").children("img").attr(src);
  if(x == "images/like.jpg")
    $(this).children("div").children("img").attr("src","images/corazon.jpg");
  else
  $(this).children("div").children("img").attr("src","images/like.jpg");*/
  });

  $('.compartir').on('click', function(){
    alert("Iphone 11");
    alert("Donde quieres compartirlo?");
  });

$('#registrarse').on('click', function(){
  $('.modal_oscuro').css("visibility", "visible");
  $('.modal-contenido1').css("visibility", "visible");
});

$('#iniciar').on('click', function(){
  $('.modal_oscuro').css("visibility", "visible");
  $('.modal-contenido2').css("visibility", "visible");
});

$('.close').on('click', function(){
  $('.modal_oscuro').css("visibility", "hidden");
  $('.modal-contenido1').css("visibility", "hidden");
  $('.modal-contenido2').css("visibility", "hidden");
   });





});
