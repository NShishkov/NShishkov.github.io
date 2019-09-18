$(function() {
	var canScrollBot = true;
	var canScrollTop = false;
	var semaphore = true;
	var i = 0;
	var width = $(window).width()-320;
	$(window).scroll(function(){
		if (semaphore){
			
			if (canScrollBot && ($(window).scrollTop() > 0) && ($(window).scrollTop() < $('.section-top').height()) ) {
				var destination = $('.services').offset().top+1;
				semaphore = false;
				$([document.documentElement, document.body]).animate({
		    	scrollTop: destination
		    }, 1000, function(){
		    	canScrollBot = false;
			    canScrollTop = true;
			    semaphore = true;
			    $('.main-content').css('margin-left',320);
			    $('.main-content').css('width',width);
			    $('.menu-left').css('margin-left',0);
		    });
		    
			}
			if (canScrollTop  && (($(window).scrollTop() <= $('.section-top').height())) ) {
				$('.main-content').css('width',$(window).width());
	    	$('.main-content').css('margin-left',0);
	    	$('.menu-left').css('margin-left',-320);
				semaphore = false;
				$([document.documentElement, document.body]).animate({
		    	scrollTop: 0
		    }, 1000,function(){
		    	canScrollBot = true;
		  	  canScrollTop = false;
		    	semaphore = true;	

		    });
			}
			// i++;
			// console.log("iteration: " +i);
			// console.log('csT: ' + canScrollTop);
			// console.log('csB: ' + canScrollBot);
			// console.log('semaphore: ' + semaphore);
		}

	});

});
