$(function() {


	$(".header-menu__link").click(function(event){
		$(".header-menu__link").removeClass('header-menu__link_active');
		$(this).addClass('header-menu__link_active');
	})

	// product select params
	$(".product-options-block__lenght li").click(function(event){
		$(".product-options-block__lenght li").removeClass('active');
		$(this).addClass('active');
	})
	$(".product-options-block__shape li").click(function(event){
		$(".product-options-block__shape li").removeClass('active');
		$(this).addClass('active');
	})

	// color picks
	$(".product-options-block__palette li").each(function() {
		var bgc = $(this).data("color");
		$(this).css("background-color", bgc);
	})


	$(".product-options-block__pipette").click(function(){
		$(".product-options-block__palette").css("display", "flex");
	})
	
	$(".product-options-block__palette li").click(function(event){
		let bgc = $(this).data("color");
		$(".product-options-block__palette li").removeClass("active");
		$(this).addClass("active");
		$(".product-options-block__palette").fadeOut();
		$(".product-options-block__color").css("background-color", bgc);
		$(".product-options-block__color").data("color", bgc);

		// white check
		if (bgc == "#ffffff"){
			$(".product-options-block__color").css("border", "2px solid #e8e8e8");
		} else{
			$(".product-options-block__color").css("border", "none");
		}
	})	
	// color pic end

	// counter incr and decr
	$(".incr").click(function(){
		let totalCount = $(".product-options__count input").val().split(" ");
		let num = parseInt(totalCount[0]) + 1;
		totalCount = num +  " шт.";
		$(".product-options__count input").val(totalCount);
	})
	$(".decr").click(function(){
		let totalCount = $(".product-options__count input").val().split(" ");
		let num = parseInt(totalCount[0]) - 1;
		totalCount = num + " шт.";
		$(".product-options__count input").val(totalCount);
	})



	//about tabs
	$(".about-block").hide();
	$(".about-block").first().show();

	$(".about-tabs li").click(function(){
		$(".about-tabs li").removeClass('active');
		$(this).addClass("active");

		let tabId = $(this).find("a").attr("href");

		$(".about-block").hide();
		$(tabId).fadeIn(300);
	})


	// gallery slider
	$('.gallery-container').slick({
    infinite: true,
	  prevArrow: $('.gallery-navs__prev'),
    nextArrow: $('.gallery-navs__next'),
    slidesToShow: 4,
	  slidesToScroll: 4,
	  rows: 2,
    responsive: [
    {
      breakpoint: 1450,
      settings: {
      	dots: true,
        slidesToShow: 4,
			  slidesToScroll: 4,
			  rows: 2	,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        rows: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        rows: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
      	centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        centerPadding: '20px',
        autoplay: true
      }
    },
  ]
  });

	// ropes slider
	$(".ropes-slider").slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  variableWidth: true,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1340,
	      settings: {
	      	dots: true,
	        slidesToShow: 4,
				  slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: true,
	        rows: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: true,
	        rows: 1
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	      	centerMode: true,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        rows: 1,
	        dots: true,	
	      }	
	    },
	  ]
	});

//hamburger-menu
$('.menu-btn').on('click', function() {
	$('.hamburger-menu').toggleClass('animate');
	if ( $('.header-menu__wrap_mobile ul').is(":visible") ){
		$('.header-menu__wrap_mobile ul').hide();
		$('.header-menu__wrap_mobile').toggleClass("shadow");

	} else{
		$('.header-menu__wrap_mobile ul').show();
		$('.header-menu__wrap_mobile').toggleClass("shadow");
	}
})

$(".header-menu__wrap_mobile ul li a").click(function(){
	if ( $('.header-menu__wrap_mobile ul').is(":visible") ){
		$('.header-menu__wrap_mobile ul').hide();
		$('.header-menu__wrap_mobile').toggleClass("shadow");
		$('.hamburger-menu').toggleClass('animate');
	}
})

});
