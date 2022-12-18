jQuery(document).ready(function($) {

 	if ($(window).width() > 800) { 

 	$(".introtext p").hover(function () {
	    var divID = $(this).attr("data-id");
	    $(divID).show();
	}, function() {
		var divID = $(this).attr("data-id");
		$(divID).hide(); 
 	});

 	}

 	else {
 	$(".introtext p").hover(function () {
	    var divID = $(this).attr("data-id");
	    $(divID).hide();
	});

 	}

});