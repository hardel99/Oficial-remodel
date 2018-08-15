$(document).ready(function() {
  if (document.title == "Home | Interfaz" || document.title == "Portafolio | Interfaz") {
    setTimeout(function() {
      $('body').addClass('loaded animated fadeIn');
      $('header').addClass('animated fadeInDown');
    }, 800);
  }
  var height = $(window).height();
  var width = $(window).width();
  var displayed = 0;
  ajustesIniciales();
  menuMovil();

  function ajustesIniciales() {
    $("section#body").css({
      "margin-top": height - 190 + "px"
    });
    if (width > 1000) {
      $('section#seccion').css({
        "height": height - 120 + "px"
      });
      $(".squer").css({
        "height": height - 200 + "px"
      });
    } else {
      if (width < 700) {
        $('section#seccion').css({
          "height": (height * 2.85) - 120 + "px"
        });
        $(".squer").css({
          "height": height - 70 + "px"
        });
        $(".cir").css({
          "height": height / 1.3 + "px"
        });
        $('.mein-cont section').css({
          "height": height + "px"
        });
        $('.serfv').css({
          "height": height - 50 + "px"
        });
      } else {
        $('section#seccion').css({
          "height": height - 120 + "px"
        });
        $(".squer").css({
          "height": height - 120 + "px"
        });
      }
      $('.logo').attr('src', 'pictures/logo.png');
    }
  }

  function menuMovil() {
    $(".haided").click(function() {
      if (displayed == 0) {
        $("#menu").animate({
          left: "0"
        });
        displayed = 1;
      } else {
        $("#menu").animate({
          left: "-100%"
        });
        displayed = 0;
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
  var sigsec = $('#seccion');
  sigsec.waypoint(function(qCam) {
    if (width > 1000) {
      if (qCam == "down") {
        $('.logo').attr('src', 'pictures/logo_dark.png');
      } else {
        $('.logo').attr('src', 'pictures/logo.png');
      }
    }
  }, {
    offset: '5%'
  });
});
