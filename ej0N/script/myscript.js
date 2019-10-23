$(document).ready(function(){


   // When the user clicks on <div>, close the box
   $('.cruz').on('click', function(){
        if(confirm('¿Seguro que quieres borrar la caja?'))
        this.parentElement.style.display = 'none';
        else;
      });

  $('.like').on('click', function(){
    var x = $(this).children("div").children("img").attr('src');
    if(x == "images/corazon.jpg")
      $(this).children("div").children("img").attr("src","images/like.jpg");

    else
      $(this).children("div").children("img").attr("src","images/corazon.jpg");
    });


    $('.compartir').on('click', function(){
      var y = $(this).offset();/*coger posicion del div*/
      var x = ($(this).parent().parent().find(".imagen h2").html());/*coger titulo div*/
      /*mover por up con respecto coordenadas para que cuadre*/
      $('.pops2').css('top', y.top -200);
      $('.pops2').css('left', y.left -100);

      $('.pops2').find('p').html(x);
      $('.pops2').find('p:nth-child(2)').html('¿Por qué canal quieres usar?');
      $('.pops2').css('visibility', 'visible');
      $(this).parent().parent().parent().parent().find("pops2").css("visibility", "visible");
    });

  $('#registrarse').on('click', function(){
    $('.modal_oscuro').fadeIn("slow");
    $('.modal-contenido1').fadeIn("slow");

  });

  $('#iniciar').on('click', function(){
    $('.modal_oscuro').fadeIn("slow");
    $('.modal-contenido2').fadeIn("slow");
  });


  $('.close').on('click', function(){
    $('.modal_oscuro').fadeOut("slow");
    $('.modal-contenido1').fadeOut("slow");
    $('.modal-contenido2').fadeOut("slow");
    $('.pops2').css('visibility', 'hidden');
    $('.dropdown-comment').css('display', 'none');

  });

  $('.ajustes').on('click', function(){
    $(this).children(".dropdown-comment").css('display', 'block');
  });

  $('.cl').on('click', function(){
   /* $('.dropdown-comment').css('visibility', 'hidden');*/
    $('.dropdown-comment').fadeOut("slow");
  });

  $('#arch').on('click', function(){
    if(confirm('¿Seguro que quieres borrar la caja?'))
          this.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
          else;
  });


  $('.añadir').on('click', function(){
    $('.modal_oscuro').fadeIn("slow");
  });

 


/*COOKIES*/ 

$('body').on('click', '#guardar', function(){

  if(localStorage.getItem('email') != $('#email').val()){

    localStorage.setItem('user', $('#user').val());

    localStorage.setItem('password', $('#password').val());

    localStorage.setItem('name', $('#name').val());

    localStorage.setItem('surname', $('#surname').val());

    localStorage.setItem('email', $('#email').val());

    localStorage.setItem('date', $('#date').val());

    localStorage.setItem('interest', $('#interest').val());

    localStorage.setItem('language', $('#language').val());

    localStorage.setItem('uso', $('#uso').val());

    jump();

  }else{

    alert('Ya existe una cuenta con este correo electrónico');

  }

});

$('.body').on('click', '#login', function(){


  if(localStorage.getItem('email') == $('#email').val() && localStorage.getItem('password') == $('#password').val()){

    jump();
    var url = "./index.html";
    $(location).attr('href', url);


  }else{

    alert('El correo o contraseña introducidos son incorrectos');
  }

});

function jump(){
      window.open('index.html', '_self');
    }

/*  console.log("hola");
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = "formulario" + "=" + document.getElementById("#user").value + "&"+ document.getElementById("#password").value+ "&"+ document.getElementById("#name").value+"&"+ document.getElementById("#surname").value+"&"+ document.getElementById("#email").value+"&"+ document.getElementById("#date").value+"&"+ document.getElementById("#interest").value+"&"+ document.getElementById("#language").value+"&"+ document.getElementById("#uso").value + ";" +  expires + ";path=/";
}

function getCookie(posicion) {
  var formulario = "formulario" + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(formulario) == 0) {
      return getsubString(c.substring(formulario.length, c.length), posicion);
    }
  }
  return "";
}
//se divide el formulario dentro de la cookie
function gesubSubstring(formulario, posicion){
  var ca = formulario.split('&');
    return ca[posicion];
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Bienvenido de nuevo" + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

function checkInicioSesion(){

  var email = getCookie(4);//posicion del array de la cookie en la que se encuentra el correo electronico
  var password = getCookie(1);//posicion del array de la cookie en la que se encuentra la contraseña

  if(email != document.getElementById("#correoInicioSesion").value) {
    alert("El correo introducido es incorrecto");
  }
  if(password != document.getElementById("contraseñaInicioSesion").value) {
    alert("El correo introducido es incorrecto");
  }else{
    document.location.href = "./index.html";
  }


}
*/




});
