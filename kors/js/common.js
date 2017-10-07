$(document).ready(function() {

	$(".top_slider").owlCarousel({
		items:1,
    margin:25,
    autoHeight:true
	});
	
	$(".slider_down").owlCarousel({
		items:4	,
    margin:25,
    autoplay:true,
    autoplaySpeed: 400,
    fluidSpeed: 1,
    autoplayTimeout:2000,
    dots: false,
    loop: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:3,
            nav:false
        },
        992:{
            items:4
        }
    }
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$(".why_item").animated("slideInLeft", "slideOutLeft");
	$(".about_item").animated('fadeIn',"fadeOut");

	$("a[href*='#']").mPageScroll2id();

});

$(window).load(function() {

}); 