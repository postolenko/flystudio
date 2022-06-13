function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getAnimation();
});

$(document).scroll(function() {
    getAnimation();
});

$(document).ready(function() {

    getAnimation();

    if( $(".slider_1").length > 0 ) {
        $(".slider_1").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendArrows: $(".slider_1_arrows"),
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow.svg"></button>'
        });
    }

    if( $(".slider_2").length > 0 ) {
      $(".slider_2").not(".slick-initialized").slick({
          dots: true,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          appendArrows: $(".slider_2_arrows"),
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow.svg"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow.svg"></button>',
          responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth: false
                }
              }
            ]
      });
    }

    if( $(".slider_3").length > 0 ) {
      $(".slider_3").not(".slick-initialized").slick({
          dots: true,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          appendArrows: $(".slider_3_arrows"),
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow_white.svg"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow_white.svg"></button>'
      });
    }

    if( $(".slider_4").length > 0 ) {
        $(".slider_4").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendArrows: $(".slider_4_arrows"),
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow_white.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow_white.svg"></button>'
        });
    }

    // ------------------

    $(".question_item").each(function() {
      sl = $(this).find(".question_item_dropdown");
      if($(this).hasClass("active")) {
         sl.css({"display" : "block"});
        sl.slideDown(300);
      } else {
        sl.css({"display" : "none"});
        sl.slideUp(300);
      }
    });

    $(".question_item_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".question_item");
      sl = parent.find(".question_item_dropdown");
      if(parent.hasClass("active")) {
        parent.removeClass("active");
        sl.slideUp(300);
      } else {
        parent.addClass("active");
        sl.slideDown(300);
      }
    });

    // --------------------

     $('.main_nav a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var hrefAttr = $(this).attr("href");
      if( hrefAttr.length > 0 && hrefAttr != "#" ) {
          $('html, body').stop().animate({
              'scrollTop': $(hrefAttr).offset().top+2
          }, 500);
      }
      if($("#resp_nav").is(":visible") && bodyWidth <= 767) {
        $("#resp_nav").fadeOut(300);
        $(".respmenubtn").removeClass("active");
      }
    });

    $('.logo').on('click', function (e) {
      e.preventDefault();
      $('html, body').stop().animate({
          'scrollTop': 0
      }, 500);
    });

    // ------------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
          $(".side_menu").addClass("slice");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
          $(".side_menu").removeClass("slice");
      }
    });

    $(".close_nav").click(function(e) {
      e.preventDefault();
      $("#resp_nav").fadeOut(300);
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

});