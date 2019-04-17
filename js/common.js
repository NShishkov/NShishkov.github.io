$(function() {

	// resize header height
	function heightDetect() {
	  $(".header").css("height", $(window).height());
	};
	heightDetect();

	function dispMenu(){
		if($(window).width() >= 576){
			$(".menu").css("display", "block");
		}else{
			$(".menu").css("display", "none");
		}
	};
	dispMenu();

	$(window).resize(function() {
	  heightDetect();
	  dispMenu();
	});

	// typer.js
	var text = $('.hero__subtitle'),
	 		textOne = "я веб-разработчик / HTML-верстальщик",
	  	textTwo = "занимаюсь созданием сайтов под ключ",
	  	textThree = "давайте работать вместе!";

	  if (!!$.prototype.typer) {
	    text.typer([textOne,textTwo,textThree]);
	  }

	//scropll to id
	$("a[href*='#']").mPageScroll2id();

	//hamburger animation
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	})

	$(".menu-wrapper").click(function() {
		if ($(".menu").is(":visible")) {
			$(".menu").fadeOut(600);
			$(".menu li a").removeClass("fadeInUp animated");
		} else {
			$(".menu").fadeIn(600);
			$(".menu li a").addClass("fadeInUp animated");
		};
	});

	
	
});
