
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
  });

  $('.shopBtn').click(function () {
    $('.fullShop').addClass('onScreen');
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
});