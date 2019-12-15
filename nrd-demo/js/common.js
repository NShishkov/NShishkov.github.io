$(function() {

	$(".menu-btn").click(function(){
		$(this).toggleClass("active");
		if ( $(".menu-block").is(":visible") ){
			$(".menu-block").fadeOut();
		}else{
			$(".menu-block").fadeIn();
		}
		// $(".menu-block").toggleClass("visible")
	});

	$(".menu-block__link").click(function(){
		$(this).toggleClass("selected");
		// console.log("aa");
	})

	function heightDetect() {
	  $(".start").css("height", $(window).height());
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



});
