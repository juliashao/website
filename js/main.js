$(document).ready(function() {
 
  $("#home-carousel").owlCarousel({
 
      autoPlay: 5000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

$('img').hover(
    function(){
      $(this).css('opacity', '0.7');
    },
    function(){
      $(this).css('opacity', '1');
    }
);