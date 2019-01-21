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
