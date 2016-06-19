$(document).ready(function() {

      $(".author").on("click", function() {
          $(".wel-info").addClass("flap");
          //$(".author").addClass("clicked");
          //e.stopPropagation()
      });
	
	$(".unflip").click(function() {
		$("body").removeClass('flap');
	});

	//  $(".wrapper").on("click", function() {
      //    $(".wel-info").removeClass("flap");
        //  $(".author").("clicked");
          //e.stopPropagation()
      //});
	
	

});



