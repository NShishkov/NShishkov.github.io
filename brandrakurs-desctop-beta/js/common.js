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
					// $('.main-content').css('transform','translate3d(320px,0,0)');
					// $('.main-content').css('width',width);
					$('.menu-left').css('transform','translate3d(0px,0,0)');
				});

			}
			if (canScrollTop  && (($(window).scrollTop() <= $('.section-top').height())) ) {
				$('.menu-left').css('transform','translate3d(-320px,0,0)');
				semaphore = false;
				$([document.documentElement, document.body]).animate({
					scrollTop: 0
				}, 1000,function(){
					canScrollBot = true;
					canScrollTop = false;
					semaphore = true;	

				});
			}
			i++;
			console.log("iteration: " +i);
			console.log('csT: ' + canScrollTop);
			console.log('csB: ' + canScrollBot);
			console.log('semaphore: ' + semaphore);
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
});
