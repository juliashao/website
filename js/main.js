$(window).load(function() {
	$(".button").on("mouseover", function() {
		$(this).addClass("");
	}); 

	$(".button").off("mouseout", function(){
		$(this).removeClass("");
	})
});



	