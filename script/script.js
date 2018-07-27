$(document).ready(function() {

  var height = $(window).height();
  var width = $(window).width();
  var displayed = 0;

  ajustesIniciales();
  menuMovil();


  function ajustesIniciales() {
    $("section#body").css({
      "margin-top": height - 190 + "px"
    });

    if(width>1000){
      $('section#seccion').css({
        "height": height - 120 + "px"         //para evitar cambios en tamaños de pantalla y que sea responsive
      });
    }else{
      if(width<700){
        $('section#seccion').css({
          "height": (height * 3.7) - 120 + "px"         //para evitar cambios en tamaños de pantalla y que sea responsive
        });

        $(".cir").css({
          "height": height/1.3 +"px"
        });

        $('.mein-cont section').css({
          "height" : height + "px"
        });

        $('.serfv').css({
          "height" : height - 50 + "px"
        });
      }else{
        $('section#seccion').css({
          "height": height - 120 + "px"         //para evitar cambios en tamaños de pantalla y que sea responsive
        });
      }

      $('.logo').attr('src','pictures/logo.png');
    }
  }

  function cancelScroll(){
    window.scrollTo(0,0);
  }

  function menuMovil() {
    $(".haided").click(function () {
      window.addEventListener("scroll", cancelScroll);

      if(displayed == 0){
        $("#menu").animate({
          left: "0"
        });
        displayed = 1;

        $(".feis").animate({
          "opacity" : 0.2
        });

        $(".content").animate({
          "opacity" : 0.2
        });

        $("#scrolldown p").animate({
          "opacity" : 0.2
        });

        $(".plan").animate({
          "opacity" : 0.2
        });

        $(".container").animate({
          "opacity" : 0.2
        });
      }else{
        window.removeEventListener("scroll", cancelScroll);

        $("#menu").animate({
          left: "-100%"
        });
        displayed = 0;

        $(".feis").animate({
          "opacity" : 1
        });

        $(".content").animate({
          "opacity" : 1
        });

        $("#scrolldown p").animate({
          "opacity" : 1
        });

        $(".plan").animate({
          "opacity" : 1
        });

        $(".container").animate({
          "opacity" : 1
        });
      }
    })
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
