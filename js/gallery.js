$(document).ready(function(){

  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");

  //An image to overlay
  $overlay.append($image);

  //Add overlay
  $("body").append($overlay);


    //click the image and a scaled version of the full size image will appear
    $(".photo-gallery a").click( function(event) {
      event.preventDefault();
      if($(document).width() > 780){

        var imageLocation = $(this).attr("href");
        $("body").css('overflow', 'hidden');
        var elmnt = document.getElementById("body").scrollHeight;
        var scrollTop = $(document).scrollTop();
        var windowHeight = $(window).height();
        var img = $(this).children("img").height();
        $overlay.css('height', elmnt);
        $('#overlay img').css('marginTop', (scrollTop + (windowHeight / 2)) - (img) - 50);
        //update overlay with the image linked in the link
        $image.attr("src", imageLocation);
        //show the overlay
        $overlay.show();
      }

    } );

    $("#overlay").click(function() {
      $( "#overlay" ).hide();
      $("body").css('overflow', 'scroll')
    });
});
$( window ).resize(function() {

});
