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

    if (width > 1000) {
      $('section#seccion').css({
        "height": height - 120 + "px" //para evitar cambios en tamaños de pantalla y que sea responsive
      });

      $(".squer").css({
        "height": height - 200 + "px"
      });
    } else {
      if (width < 700) {
        $('section#seccion').css({
          "height": (height * 2.8) - 120 + "px" //para evitar cambios en tamaños de pantalla y que sea responsive
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
          "height": height - 120 + "px" //para evitar cambios en tamaños de pantalla y que sea responsive
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

  //Desde aqui empiezo a hacer mi magia

  //Watch this
  var triger = document.getElementById("forTher");
  var imag = document.getElementById("salM");

  var maus = {
    pseudX: 0,
    pseudY: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this.pseudX;
      this.y = (e.clientY - this.pseudY) * -1;
    },
    setOrigin: function(e) {
      this.pseudX = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this.pseudY = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }

  maus.setOrigin(triger);

  var count = 0;
  var framsps = 10;
  var actualiza = function() {
    return count++ % framsps === 0;
  };

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    imag.style = "";
  };

  var onMouseMoveHandler = function(event) {
    if (actualiza()) {
      update(event);
    }
  };

  var update = function(event) {
    maus.updatePosition(event);
    transformerYa(
      (maus.y / imag.offsetHeight / 2).toFixed(2),
      (maus.x / imag.offsetWidth / 2).toFixed(2)
    );
  };

  var transformerYa = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    imag.style.transform = style;
    imag.style.webkitTransform = style;
    imag.style.mozTransform = style;
    imag.style.msTransform = style;
    imag.style.oTransform = style;
  };

  triger.onmouseenter = onMouseEnterHandler;
  triger.onmouseleave = onMouseLeaveHandler;
  triger.onmousemove = onMouseMoveHandler;

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
  //listo prro
});
