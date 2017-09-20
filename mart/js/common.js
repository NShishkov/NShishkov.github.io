$(document).ready(function() {
var menu = $('.menu-3');

menu.on('click', function() {
  var menuNum = $(this).data('menu');
  $(this).toggleClass('menu-'+ menuNum +'-active');
})


$(".menu-3").click(function() {
		if ($(".main_menu").is(":visible")) {
			$(".main_menu").fadeOut(600);
			$(".main_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".main_menu").fadeIn(600);
			$(".main_menu li a").addClass("fadeInUp animated");
		};
	});

});
$(window).load(function() {

}); 