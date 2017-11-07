$(document).ready(function(){
    $("#section-01 .row").animate({
        opacity: '1.0'
    }, "slow");


	$("nav #contact-us-btn").click(function() {
	    $('html, body').animate({ scrollTop: $("#section-08").offset().top }, 2000); 
	    return false;
	});

	  var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
	    ,fadeUntil=400 // 200px scroll or more will equiv to 0 opacity
	    ,fading = $('#scroll-down');
	    

	$(window).bind('scroll', function(){
	    var offset = $(document).scrollTop(), opacity=0;
	    if( offset<=fadeStart ){
	        opacity=1;
	    }else if( offset<=fadeUntil ){
	        opacity=1-offset/fadeUntil;
	    }
	    fading.css('opacity', opacity).html();
	});

	// $('#menu').load('menu.html'); 

});

function setActiveLink (page) {
	var activeLink;
	switch (page) {
		case "home":
			activeLink = $('#menu .dropdown-menu li:nth-child(1) a');
			break;
		case "acorns":
			activeLink = $('#menu .dropdown-menu li:nth-child(2) a');
			break;
		case "seedlings":
			activeLink = $('#menu .dropdown-menu li:nth-child(3) a');
			break;
		case "oaks":
			activeLink = $('#menu .dropdown-menu li:nth-child(4) a');
			break;
		case "stories":
			activeLink = $('#menu .dropdown-menu li:nth-child(5) a');
			break;
		case "about":
			activeLink = $('#menu .dropdown-menu li:nth-child(6) a');
			break;
	}
	activeLink.addClass("active");
	activeLink.prepend('<span class="glyphicon glyphicon-leaf active-glyph"></span> ');
}