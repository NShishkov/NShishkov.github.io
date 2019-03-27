$(function() {
	$('.main').height($(window).height()-84);
	$(window).resize(function() {
  	$('.main').height($(window).height()-84);
  })


	$(".menu a[href*='#']").mPageScroll2id();
	$(".menu a[href*='#fe']").mPageScroll2id();
	$(".arrow-wrap").mPageScroll2id();	
	$("a[href*='#feedback__form']").mPageScroll2id();
	new WOW().init();

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
	

$('.popup-with-form').magnificPopup({
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


// Hinge effect popup
$('a.hinge').magnificPopup({
  mainClass: 'mfp-with-fade',
  removalDelay: 1000, //delay removal by X to allow out-animation
  callbacks: {
    beforeClose: function() {
        this.content.addClass('hinge');
    }, 
    close: function() {
        this.content.removeClass('hinge'); 
    }
  },
  midClick: true
});


//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Cпасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});
