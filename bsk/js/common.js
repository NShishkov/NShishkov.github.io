$(document).ready(function() {

	function heightDetect() {
		$(".main_header").css("height", $(window).height());
		$(".reviews-bg").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});	

	$("a[href*='#']").mPageScroll2id();

	$(".service-item").animated("slideInLeft", "fadeOutLeft");
	$(".icon-wrap").animated("zoomIn","zoomOut");
	$(".map").animated("fadeInUp","fadeOutDown")
	$(".sro").animated("fadeInRight","fadeOutRight")

	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		center: true,
		nav: true,
		navText: ""
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 
		}
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

});
