$(document).ready(function() {
/*------preloader--------*/

$(function () {
        var imgs = [];

        $.each($('*'), function () {
            var $this = $(this),
                background = $this.css('background-image'),
                img = $this.is('img');

            if (background != 'none') {
                var path = background.replace('url(', '').replace(')', '').replace('"', '').replace('"', ''),
                patt = /gradient/gmi,
                pathMatch = patt.test(path);
                if (pathMatch == false) {
                    imgs.push(path);
                }

            }

            if (img) {
                var path = $this.attr('src');
                if (path) {
                    imgs.push(path);
                }
            }
        });

        var percents = 1;

        for (var i = 0; i < imgs.length; i++) {
            var image = $('<img>', {
                attr: {
                    src: imgs[i]
                }
            });
            image.load(function () {
                setPercents(imgs.length, percents);
                percents++;
            })
        }

        function setPercents(total, current) {
            var percent = Math.ceil(current / total * 100);

            if (percent >=100) {
                 $('.preloader').fadeOut('slow');
            }
            //$('.loader-bar').text(percent);
            $('.loader-bar').css({
              'width' : percent + '%'
            }).text(percent + '%');
        }

    });


//переворот плашки на welcome
      $(".author").on("click", function(flip) {
          $(".wel-info").addClass("flap");
          setTimeout(function(){
            $(".author").addClass("clicked");
      },3000);
          flip.stopPropagation()
      });

      $(".form_nav_list").on("click", function(flip) {
          $(".wel-info").removeClass("flap");
          $(".author").removeClass("clicked");
          flip.stopPropagation()
      });

//меню-шторки всплывающее
var bgMenu = $(".hidden_menu"),
    content = $(".hidden_menu_cont")
    burger = $(".burger-menu")
    
burger.on('click', onClickToggle);

function onClickToggle(e){
  e.preventDefault();
  burger.toggleClass('menu-on'),
  bgMenu.toggleClass('active');
  content.toggleClass('content_show');
  
  currentSlideIndex=0;
}





//SLIDER

/*(function slider() {
  var counter = 1;
  $('#sliderUp').on('click', function (e) {
    e.preventDefault();
    var items = $('.btn-up .slider__pict'),
        ActItem = $('.btn-up .slider__pict.active'),
        anotherItems = $('.btn-down .slider__pict'),
        anotherActItem = $('.btn-down .slider__pict.active'),
        descrItems = $('.left_slider_descr_item'),
        descrActItem = $('.left_slider_descr_item.active');


    if (counter >= items.length){
      counter = 0;
    }
    var nextItem = items.eq(counter),
        anotherNextItem = anotherItems.eq(-counter + 1),
        nextDescrItem = descrItems.eq(counter - 1);

    ActItem.animate({
      'top' : '-55%'
    }, 400);
    anotherActItem.animate({
      'top': '155%'
    }, 400);

    descrActItem.animate({
      'display' : 'none'
    }, 150);

    nextDescrItem.animate({
      'display': 'block'
    }, 150, function () {
      descrActItem.removeClass('active');
      nextDescrItem.addClass('active');
    });


    function changeSlide(src){
      $('.port_slider_img').attr('src', src);
    }

    nextItem.animate({
      'top' : '50%'
    }, 300, function () {
      var src = ActItem.find('img').attr('src');
      changeSlide(src);
      ActItem.removeClass('active').css('top', '155%');
      nextItem.addClass('active');

    });
    anotherNextItem.animate({
      'top': '50%'
    }, 300, function () {
      anotherActItem.removeClass('active').css('top', '-55%');
      anotherNextItem.addClass('active');
    });

    counter++;

  });
  
  
}());*/

$(function () {
    var controlPrev = $('.nav__prev .link'),
        controlNext = $('.nav__next .link');


    function setActiveSlides() {
        var imgActive = $('.img__container .image.active'),
            imgActiveIndex = imgActive.index(),
            prevThumb = $('.nav__prev .slider__item'),
            nextThumb = $('.nav__next .slider__item'),
            descr = $('.descr__container');

        prevThumb.removeClass('movedown');
        nextThumb.removeClass('moveup');


        if (imgActive.next().length == 0) {
            nextThumb.first().addClass('active');
        } else if (imgActive.next().length != 0) {
            nextThumb.eq(imgActiveIndex + 1).addClass('active');
        }

        if (imgActive.prev().length == 0) {
            prevThumb.last().addClass('active');
        } else if (imgActive.prev().length != 0) {
            prevThumb.eq(imgActiveIndex - 1).addClass('active');
        }

        if (descr.next().length == 0) {
            descr.first().addClass('active');
        } else if (descr.next().length != 0) {
            descr.eq(imgActiveIndex).addClass('active');
        }
    }

    setActiveSlides();

    controlPrev.on('click', function () {
        var img = $('.img__container .image'),
            imgActive = $('.img__container .image.active'),
            navPrevActive = $('.nav__prev .slider__item.active'),
            navNextActive = $('.nav__next .slider__item.active'),
            descr = $('.descr__container');

        $('.link').attr('disabled', 'disabled');

            imgActive.removeClass('active').prev().addClass('active');
            descr.removeClass('active');
            if (imgActive.prev().length == 0) {
                img.last().addClass('active');
            }

            setActiveSlides();
        navPrevActive.addClass('movedown').removeClass('active');
        navNextActive.addClass('moveup').removeClass('active');
        setTimeout(function () {
            $('.link').removeAttr('disabled');
            $('.slider__item').removeClass('moveup movedown');
        }, 700)
    });

    controlNext.on('click', function () {
          var img = $('.img__container .image'),
            imgActive = $('.img__container .image.active'),
            navPrevActive = $('.nav__prev .slider__item.active'),
            navNextActive = $('.nav__next .slider__item.active'),
            descr = $('.descr__container');

        $('.link').attr('disabled', 'disabled');

            imgActive.removeClass('active').next().addClass('active');
            descr.removeClass('active');
            if (imgActive.next().length == 0) {
                img.first().addClass('active');
            }

            setActiveSlides();
        navPrevActive.addClass('movedown').removeClass('active');
        navNextActive.addClass('moveup').removeClass('active');

        setTimeout(function () {
            $('.link').removeAttr('disabled');
            $('.slider__item').removeClass('moveup movedown');
        }, 700)
    });
});




/*----------scroll_blog----------------*/


$(window).scroll(function () {
  var
      wScroll = $(window).scrollTop();
       menu = $('.static .menu_list');
       sidebar = $('.static .sidebar_menu');
       styckyStart = sidebar.offset().top;

  if (wScroll >= stickyStart){
    menu.css({
      top:wScroll-styckyStart + 'px'
    });
  }



});


//--------------blur

function set_bg(){
    if($(".for_me_form").length){
        var form = $(".for_me_form"),
            form_bg = form.find(".for_me_form_bg_blur"),
            talks_top = $(".say_for_me").offset().top,
            form_bg_top = form_bg.offset().top,
            bg_offset = talks_top - form_bg_top;

        form_bg.css({
            "background-position" : "center " + bg_offset + "px"
        });
    }
}

$(window).load(function() {
    set_bg();
});

$(window).resize(function() {
    set_bg();
});




});



