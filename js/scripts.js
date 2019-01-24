$( document ).ready(function() {

  $('.venobox').venobox();

  $('.venobox_custom').venobox({
        infinigall: true,            // default: false
        spinner: 'spinner-pulse',
        spinColor: 'white',
        closeBackground: 'transparent',
        closeColor: 'transparent'
    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();

      // Cada titulo tiene que tener su propio numero de scroll
      // Artistas
      if(scroll >= 120) {
        $('.artistas .sectionTitle').addClass('titleIn');
      } else {
        $('.artistas .sectionTitle').removeClass('titleIn');
      }

      // El FESTIVAL
      // Este esta bien, pero inncluyo todos los demas porque aun no se lo que van a ocupar
      if(scroll >= 1350) {
        // $('.theFestival .sectionTitle').addClass('titleIn');
        $('.sectionTitle:not(#artistas .sectionTitle)').addClass('titleIn');
      } else {
        // $('.theFestival .sectionTitle').removeClass('titleIn');
        $('.sectionTitle:not(#artistas .sectionTitle)').removeClass('titleIn');
      }
    });

  var menu = 0;
    $('.menu_button').click(function(){
      $('.main-menu').toggleClass('hideMenu');

      if(menu == 0){
        for(var i = 1; i < 6; i++){
          $('.navItem' + i).addClass('animationItem' + i);
        }
        $('.logo_menu').addClass('animatedLogo');
        menu = 1;
      } else {
        for(var i = 1; i < 6; i++){
          $('.navItem' + i).removeClass('animationItem' + i);
        }
        $('.logo_menu').removeClass('animatedLogo');
        menu = 0;
      }

    });

    $('.main-menu ul li').click(function(){
      $('.main-menu').addClass('hideMenu');
      for(var i = 1; i < 6; i++){
        $('.navItem' + i).removeClass('animationItem' + i);
      }
      $('.hamburger').removeClass('is-active');
      menu = 0;
    });

    $('.logo_menu').click(function(){
      $('.main-menu').addClass('hideMenu');
      for(var i = 1; i < 6; i++){
        $('.navItem' + i).removeClass('animationItem' + i);
      }
      $('.hamburger').removeClass('is-active');
      menu = 0;
    });

    $('.grid a').click(function(){
      $('.home').addClass('hideHome');
      $('.tickets-form').addClass('hideForm');
      $('.menu_button').addClass('hideForm');
      $('.content__item-intro h2').addClass('titleBackgroundOn').delay(400).fadeIn(300);
    });

    $('.content__close').click(function(){
      $('.home').removeClass('hideHome');
      $('.tickets-form').removeClass('hideForm');
      $('.menu_button').removeClass('hideForm');
      $('.content__item-intro h2').removeClass('titleBackgroundOn');
    });

    // $('a.venobox').click(function(){
    //   $('.menu_button').addClass('hideForm');
    // });

    $('.vbox-overlay').click(function(){
      console.log('Tocaste justo donde tocaba');
    });

    // Cerrando los horarios
    $('.close_schedule').click(function(){
      $('.horarios_full').addClass('close_horarios_anim');
      setTimeout(function(){
        $('.horarios_full').removeClass('animacionPelota');
        $('.real_schedule').removeClass('fadeInHorariosLista');
        $('.close_schedule').removeClass('fadeInHorariosClose');
        $('.horarios_full').removeClass('close_horarios_anim');
      }, 500);
    });

    $('.botonCodePen').click(function(e){
      e.preventDefault();
      $('.horarios_full').addClass('animacionPelota');
      $('.real_schedule').addClass('fadeInHorariosLista');
      $('.close_schedule').addClass('fadeInHorariosClose');
    });

    // Seccion de noticias
    var titulares = $('.veryNew.topRight');

    $('.topLeft').click(function(){
      titulares.css('opacity', '0');
      // $('.topLeft .veryNewText').css('left', '800px');
      $('.topLeft .veryNewText').css('left', '55vw');
      $('.topLeft .veryNewText').css('opacity', '1');

      $('.bottomRight .veryNewText').css('left', '0');
      $('.bottomLeft .veryNewText').css('transform', 'translateY(-430px) translateX(0)');

    });

    $('.bottomRight').click(function(){
      titulares.css('opacity', '0');
      // $('.bottomRight .veryNewText').css('left', '800px');
      $('.bottomRight .veryNewText').css('left', '55vw');
      $('.bottomRight .veryNewText').css('opacity', '1');

      $('.topLeft .veryNewText').css('left', '0');
      $('.bottomLeft .veryNewText').css('transform', 'translateY(-430px) translateX(0)');

    });

    $('.bottomLeft').click(function(){
      titulares.css('opacity', '0');
      $('.bottomLeft .veryNewText').css('transform', 'translateY(-430px) translateX(55vw)');
      $('.bottomLeft .veryNewText').css('opacity', '1');

      $('.topLeft .veryNewText').css('left', '0');
      $('.bottomRight .veryNewText').css('left', '0');

    });

    // Animacion logo

    var moveForce = 30; // max popup movement in pixels
    var rotateForce = 20; // max popup rotation in deg

    $(document).mousemove(function(e){
      var docX = $(document).width();
      var docY = $(document).height();

      var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
      var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;

      var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
      var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);

      $('.popup')
            .css('left', moveX+'px')
            .css('top', moveY+'px')
            .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
    });

    // nieve

    (function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    flakeCount = 400,
    mX = -100,
    mY = -100

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],
            x = mX,
            y = mY,
            minDist = 150,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

        ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;

        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }


        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(snow);
};

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 3) + 2;
    flake.speed = (Math.random() * 1) + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = (Math.random() * 3) + 2,
            speed = (Math.random() * 1) + 0.5,
            opacity = (Math.random() * 0.5) + 0.3;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            opacity: opacity
        });
    }

    snow();
};

canvas.addEventListener("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

init();

    // Comprobando la clase del body para ocultar el boton del menu

    // if($('body').hasClass('vbox-open')){
    //   $('.menu_button').addClass('hideForm');
    // } else {
    //   $('.menu_button').removeClass('hideForm');
    // }
    //
    // console.log($('body').hasClass('vbox-open'))


    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
});
