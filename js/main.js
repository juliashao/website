var owl = $('#home-carousel');

$(document).ready(function() {
  
  owl.owlCarousel({

      autoWidth: true,
      autoHeight: true,
      singleItem: false,
      items: 2,
      dots: true,
      nav: true,
      loop: true,
      margin:10
 
  });
 
});

$(document).ready(function () {
    var carousel = $("#owl-demo");
  carousel.owlCarousel({
    navigation:true,
    navigationText: [
      "<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
      ],
  });

  
});

$('#photos .preview .item img').hover(
    function(){
      $(this).css('opacity', '0.7');
    },
    function(){
      $(this).css('opacity', '1');
    }
);

$('#projects .preview .item img').hover(
    function(){
      $(this).css('opacity', '0.7');
    },
    function(){
      $(this).css('opacity', '1');
    }
);