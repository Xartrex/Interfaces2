$(document).ready(function(){

 // When the user clicks on <div>, open the popup
 $('.cruz').on('click', function(){
      if(confirm('¿Seguro que quieres borar la caja?'))
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
    alert("hey");
    alert(this.parentElement("div").sibling(".imagen").children("h2"));
  });
  


});
