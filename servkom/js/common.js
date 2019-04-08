$(function() {
	$("a").mPageScroll2id();


	$(".menu-mobile").click(function() {
		if ($(".main_menu").is(":visible")) {
			$(".main_menu").fadeOut(600);
			$(".main_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".main_menu").fadeIn(600);
			$(".main_menu li a").addClass("fadeInUp animated");
		};
	});

	$('.menu-mobile').click(function(){
		$(this).toggleClass('open');
	});


	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
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
