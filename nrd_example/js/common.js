$(function() {

	$(".menu-btn").click(function(){
		$(this).toggleClass("active");
		if ( $(".menu-block").is(":visible") ){
			$(".menu-block").fadeOut();
		}else{
			$(".menu-block").fadeIn();
		}
	});

	$(".menu-block__link").click(function(){
		$(this).toggleClass("selected");
	})

	function heightDetect() {
		if ( (window).innerWidth >= 768){
			$(".start").css("height", $(window).height());
			$(".services").css("height", $(window).height()-86);
			console.log("a");
		}else{
			$(".start").css("height", "auto");
			$(".services").css("height", "auto");
		} 
	};
	heightDetect();
	$(window).resize(function() {
	  heightDetect();
	});

	// function fixMenu(){
	// 	$(window).scroll(function(){
	// 		if ($(this).scrollTop() > 1) {
	// 			$('.menu').addClass('fixed');
	// 			$("body").css("margin-top", "86px");
	// 		} else {
	// 			$('.menu').removeClass('fixed');
	// 			$("body").css("margin-top", "0px");
	// 		}
	// 	});
	// };

// function fixMenu(){
// 		$(window).scroll(function(){
// 			if (window.innerWidth <= 3000){
// 				if ($(this).scrollTop() > 1) {
// 					$('.menu').addClass('fixed');
// 					$("body").css("margin-top", "86px");
// 				} else {
// 					$('.menu').removeClass('fixed');
// 					$("body").css("margin-top", "0px");
// 				}
// 			}
// 		});
// 	}
		
 // fixMenu();

 	// parallax effect
	var currentX = '';
	var currentY = '';
	var movementConstant = .010;
	$(document).mousemove(function(e) {
	  if(currentX == '') currentX = e.pageX;
	  var xdiff = e.pageX - currentX;
	  currentX = e.pageX;
	   if(currentY == '') currentY = e.pageY;
	  var ydiff = e.pageY - currentY;
	  currentY = e.pageY; 
	  $('.parallax div').each(function(i, el) {
	      var movement = (i + 1) * (xdiff * movementConstant);
		  var movementy = (i + 1) * (ydiff * movementConstant);
	      var newX = $(el).position().left + movement;
		  var newY = $(el).position().top + movementy;
	      $(el).css('left', newX + 'px');
		  $(el).css('top', newY + 'px');
	  });
	});

	// services tabs

	$(".tab-wrap").hide();
	$(".tab-wrap:first").show();
	$(".services-tabs li a:first").addClass('active');

	$(".services-tabs li a").click(function(event){
		$(".services-tabs li a").removeClass('active');
		$(this).addClass('active');
		$(".tab-wrap").hide();

		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(1000);

	})



});
