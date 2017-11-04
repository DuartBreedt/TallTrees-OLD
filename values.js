$(document).ready(function(){

	$(".value-cards").each(function(item) {

		var colours = ["rgb(171, 80, 94)", "rgb(217, 160, 113)", "rgb(207, 200, 143)", "rgb(165, 176, 144)", "rgb(96, 120, 115)"];

		for(var i = 0; i<colours.length; i++) {

			var predObj = $(".value-cards").eq(item-1);
			var roofObj = $(".value-cards").eq(item-3);

			if(item != 0 && colours[i] == predObj.css("background-color"))
				colours.splice(i, 1);
		}

		$(this).css("background-color", colours[Math.floor(Math.random()*colours.length)]);
	});

});