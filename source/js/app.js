$(document).ready(function() {
//переворот плашки на welcome
      $(".author").on("click", function(flip) {
          $(".wel-info").addClass("flap");
          setTimeout(function(){
            $(".author").addClass("clicked");
      },3000);
          flip.stopPropagation()
      });

      $(".wel_wrapper").on("click", function(flip) {
          $(".wel-info").removeClass("flap");
          $(".author").removeClass("clicked");
          flip.stopPropagation()
      });

//меню-шторки всплывающее
var bgMenu = $(".hidden_menu"),
    content = $(".hidden_menu_cont")
    burger = $(".burger")
    
$('.burger').on('click', onClickToggle);

function onClickToggle(e){
  e.preventDefault();
  bgMenu.toggleClass('active');
  content.toggleClass('content_show');
  burger.toggleClass('burger_push');
}

//слайдер

$('.nav_next')on('click', function() {



  var $this     = $(this),
      container = $this.closest('.my_work')
  //event.preventDefault();
  /* Act on the event */
});

});



