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
    burger = $(".burger")
    
burger.on('click', onClickToggle);

function onClickToggle(e){
  e.preventDefault();
  bgMenu.toggleClass('active');
  content.toggleClass('content_show');
  burger.toggleClass('burger_push'),
  currentSlideIndex=0;
}





//SLIDER

(function slider() {
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
  
  
}());




/*----------scroll_blog----------------*/


$(window).scroll(function () {
    checkSection();
    var sticky = $('.sidebar_menu'),
        scroll = $(window).scrollTop();
    if($('.sidebar_menu').length > 0) {
        if (scroll > $('.left_blog_sidebar').offset().top) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    }
});

function checkSection() {
    $('.singleArticle').each(function () {
        var $this = $(this),
            topEdge = $this.offset().top-50,
            bottomEdge = topEdge+$this.height(),
            wScroll = $(window).scrollTop();

        if (topEdge < wScroll && bottomEdge > wScroll) {
            var currentId = $this.data('section'),
                reqLink = $('.blogleft__menu .link').filter('[href="#'+currentId+'"]');

            reqLink.closest('.blogleft__menu .list').addClass('active').siblings().removeClass('active');

            window.location.hash = currentId;
        }
    })
}

});



