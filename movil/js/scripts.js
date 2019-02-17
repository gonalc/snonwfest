
  // Hamburguesa
  /**
   * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
   *
   * @private
   * @author Todd Motto
   * @link https://github.com/toddmotto/foreach
   * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
   * @callback requestCallback      callback   - Callback function for each iteration.
   * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
   * @returns {}
   */
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

// Cambiando el menu con el scroll
navbarStyle();

$(window).scroll(function () {
    navbarStyle();
});

function navbarStyle() {
    var altura_del_header = $('#cabecera').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header) {
        $('.button_container').addClass('scrolled');

    } else {
        $('.button_container').removeClass('scrolled');

    }
}

// Galeria, horarios y demás cosas del document.ready
$(document).ready(function () {
  $("#lightgallery").lightGallery({
    controls: false,
  });

  $('.scheduleBtn').click(function(){
    $('.horariosFull').addClass('onScreen');
  });

  $('.closeScheduleBtn').click(function () {
    $('.horariosFull').removeClass('onScreen');
    $('.fullShop').removeClass('onScreen');
    $('.moreInfoTickets').removeClass('onScreen');
  });

  $('.shopBtn').click(function () {
    $('.fullShop').addClass('onScreen');
  });

  $('.moreInfo').click(function () {
    $('.moreInfoTickets').addClass('onScreen');
  });

  // Menu
  var menu = 0;
  $('.menu_button').click(function () {
    if(menu === 0){
      $('body').addClass('showMenu');
      $('.hamburger').addClass('is-active');
      menu = 1;
    } else {
      $('body').removeClass('showMenu');
      $('.hamburger').removeClass('is-active');
      menu = 0;
    }
  });
  $('.navItemMob').click(function(){
    $('body').removeClass('showMenu');
    $('.hamburger').removeClass('is-active');
    menu = 0;
  });

  // Noticias
  $('.new.first').click(function(){
    $('.newContent').css('height', '0');
    $('.newContent').css('padding', '0');
    $('.firstNew').css('height', 'auto');
    $('.firstNew').css('padding', '16px');
  });

  $('.new.second').click(function () {
    $('.newContent').css('height', '0');
    $('.newContent').css('padding', '0');
    $('.secondNew').css('height', 'auto');
    $('.secondNew').css('padding', '16px');
  });

  $('.new.third').click(function () {
    $('.newContent').css('height', '0');
    $('.newContent').css('padding', '0');
    $('.thirdNew').css('height', 'auto');
    $('.thirdNew').css('padding', '16px');
  });

  // Artistas
  $('.artistLink').click(function(){
    $(this).toggleClass('artist-active');
  }); // Esta función es para girar el aspa

  $('.andyc').click(function(){
    $('.Andyc').toggleClass('showDetail');
  });

  $('.ghostface').click(function () {
    $('.Ghostface').toggleClass('showDetail');
  });

  $('.booka').click(function () {
    $('.Booka').toggleClass('showDetail');
  });

  $('.wilkinson').click(function () {
    $('.Wilkinson').toggleClass('showDetail');
  });

  $('.catz').click(function () {
    $('.Catz').toggleClass('showDetail');
  });

  $('.friction').click(function () {
    $('.Friction').toggleClass('showDetail');
  });

  $('.alix').click(function () {
    $('.Alix').toggleClass('showDetail');
  });

  $('.calyx').click(function () {
    $('.Calyx').toggleClass('showDetail');
  });

  $('.lakilan').click(function () {
    $('.Lakilan').toggleClass('showDetail');
  });

  $('.rapowanie').click(function () {
    $('.Rapowanie').toggleClass('showDetail');
  });

  $('.conrad').click(function () {
    $('.Conrad').toggleClass('showDetail');
  });

  $('.teddybears').click(function () {
    $('.Teddybears').toggleClass('showDetail');
  });
});

// nieve

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (callback) {
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

canvas.addEventListener("mousemove", function (e) {
  mX = e.clientX,
    mY = e.clientY
});

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

init();