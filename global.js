var menuIsOpen = false;
var timerId;
var loadSuccess = false;

window.onload = function(){
	if (loadSuccess) {
		removeLoader();
	}
	loadSuccess = true;	
};

$(document).ready(function(){

	setTimeout(function(){
		if(loadSuccess) {
			removeLoader();
		}
		loadSuccess = true;		
	}, 2000);

	$('.contact-section').load('contact.html');

	$("#menu").on('click', '#contact-us-btn', function () {
		$('html, body').animate({ scrollTop: $(".contact-section").offset().top }, 2000); 
		return false;
	});

	// $("#menu").on('click', 'a', function () {
	// 	$("#loader").fadeIn(200, function () {

	// 	});
	// 	return false;
	// });

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

	$("#menu").on("click", ".menu-btn", function(){
		toggleMenu();
	});

});

function redirectHandler(location) {
	$("#loader").fadeIn(200, function() {
		window.location.href = location;
	});
	return false;
}

function removeLoader() {
	$("#loader").fadeOut(200, function () {
		$("#section-01 .row").animate({
			opacity: '1.0'
		}, "slow");
	});
}

function toggleMenu() {
	if (menuIsOpen) {
		menuIsOpen = false;
		$(".custom-menu-items").animate({ 
			right: '-210px',
			opacity: 0
		}, 200); 
	} else {
		menuIsOpen = true;
		$(".custom-menu-items").animate({ 
			right: '0px',
			opacity: 1
		}, 200); 
	}
	
	
}

function setActiveLink (page) {
	var activeLink;
	switch (page) {
		case "home":
			activeLink = $('#menu .custom-menu-items-top .custom-menu-item:nth-child(1) a');
			break;
		case "stories":
			activeLink = $('#menu .custom-menu-items-top .custom-menu-item:nth-child(2) a');
			break;
		case "about":
			activeLink = $('#menu .custom-menu-items-top .custom-menu-item:nth-child(3) a');
			break;
		case "acorns":
			activeLink = $('#menu .custom-menu-items-bottom .custom-menu-item:nth-child(2) a');
			break;
		case "seedlings":
			activeLink = $('#menu .custom-menu-items-bottom .custom-menu-item:nth-child(3) a');
			break;
		case "oaks":
			activeLink = $('#menu .custom-menu-items-bottom .custom-menu-item:nth-child(4) a');
			break;
		
	}
	activeLink.addClass("active");
	activeLink.prepend('<span class="glyphicon glyphicon-leaf active-glyph"></span> ');
}