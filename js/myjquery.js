// jslint browser: true







	
$(document).ready(function() {
	
	// Click on left player
	$("#player_left").click(function() {
 		
		// If left player is small
		if  ($("#player_left").hasClass("left_large") === false) {
				// make it big
				$("#player_left").addClass("left_large").removeClass("blur");
				// blur the other guy
				$("#player_right").addClass("blur").removeClass("right_large");
	
		  // if right player is large
		} else if  ($("#player_right").hasClass("left_large") === true) {
				// make left small
				$("#player_left").removeClass("left_large");
				// unblur other guy
				 $("#player_right").removeClass("blur");
		} else { 
				// make it small
				$("#player_left").removeClass("left_large");
				// unblur other guy
				 $("#player_right").removeClass("blur");
		}				 

	});
});


	
$(document).ready(function() {
	
	// Click on right player
	$("#player_right").click(function() {
 		
		// If right player is small
		if  ($("#player_right").hasClass("right_large") === false) {
				// make it big
				$("#player_right").addClass("right_large").removeClass("blur");
				// blur the other guy
				$("#player_left").addClass("blur").removeClass("left_large");

	
		// if right player is large, make small
		} else {
				// make it small
				$("#player_right").removeClass("right_large");
				$("#player_left").removeClass("blur");
				$("#player_right").removeClass("right_large");				 
			}

	});
});