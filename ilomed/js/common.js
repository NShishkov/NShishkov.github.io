$(function() {

	$(".menu__item a[href*='#'], footer a[href*='#'], a[href*='#feedback']").mPageScroll2id({
		offset: -3,
	});

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// $("a[href*='#']").mPageScroll2id();

	$('.licension-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});


	$('.about-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		appendDots: $('.about-dots'),
		prevArrow: $('.arrows_left'),
		nextArrow: $('.arrows_right'),
	});

	$('.slider').slick({
	  slidesToShow: 3,
	  centerMode: true,
	  slidesToScroll: 1,
	  focusOnSelect: true,
	  centerPadding: "0px",
	  asNavFor: '.slider-for',
	  prevArrow: $('.arrows_left'),
		nextArrow: $('.arrows_right'),
		dots: true,
		appendDots: $('.custom-dots'),
	  speed: 500
	});

	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
  	// adaptiveHeight: true,
	  fade: true,
	  asNavFor: '.slider'
	});

	$('.doctors-topslider').slick({
  centerMode: true,
  arrows: false,
  variableWidth: true,
  centerPadding: '0px',
  speed: 500,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

});
