$(document).ready(function() {

  var height = $(window).height();

  ajustesIniciales();


  function ajustesIniciales() {
    $("section#body").css({
      "margin-top": height - 80 + "px"
    });

    $('section#seccion').css({
      "height": height + "px"         //para veitar cambios en tamaños de pantalla y que sea responsive
    });
  }


  $(document).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var pixels = scrollTop / 70;

    if (scrollTop < height) {
      $("section#contenedor_general").css({
        "-webkit-filter": "blur(" + pixels + "px)",
        "background-position": "center -" + pixels * 10 + "px"
      });
    }

  });

	//Desde aqui empiezo a hacer mi magia

	var sigsec = $('#seccion');

	sigsec.waypoint(function (qCam) {
		if(qCam == "down"){
			$('.logo').attr('src','pictures/logo_dark.png');
		}else{
			$('.logo').attr('src','pictures/logo.png');
		}

	}, { offset: '5%'});

	//listo prro

});
