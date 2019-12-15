$(function() {
	const panels = document.querySelectorAll('.panel');
	var basis = $(window).width()/4.0 + 'px';
	var basisHeight = $(window).height() + 'px';
	$(window).resize(function(){
		basis = $(window).width()/4.0 + 'px';
		basisHeight = $(window).height() + 'px';
		$(".panel img").css("max-width",basis);
		$(".panel img").css("min-width",basis);
		$(".panel img:nth-child(2)").css("margin-left",basis);
	})
	function toggleOpen() {
		var img = $(this).find('img').eq(1);
		var menu = $(this).find('.menu-nav').eq(0);
		var menuWidth;
		if ($(this).hasClass('open')){
			$(this).removeClass('open');
			img.fadeOut(500);
			menu.fadeOut(500);
			$('.panel-citation').fadeOut(500);
		}else{
			$('.panel.open img:nth-child(2)').css('display','none');
			$('.panel.open .menu-nav').css('display','none');
			$('.panel.open').removeClass('open');
			$('.panel').css("max-width",basis);
			$('.panel-citation').css('display','none');
			$(this).find('.panel-citation').css('display','block');
			$(this).css("max-width",'unset');
			$(this).addClass('open');
			img.delay(100).fadeIn(100);
			menu.delay(100).fadeIn(100);
			var $svg = $(this).find('svg').drawsvg({
				duration: 2000,
			});
			$svg.drawsvg('animate');
		}
			widthOne = $(window).width()-65*3;
			widthTwo = 30*($(window).width())/33.0;
			minWidth = Math.min(widthOne,widthTwo)
		  menuWidth = minWidth - basis.replace('px','')*2;
		  console.log(widthOne);
		  console.log(widthTwo);
		  console.log(menuWidth);
			menu.css('max-width',menuWidth);
	}

	panels.forEach(panel => panel.addEventListener('click', toggleOpen));

	$(".panel img").css("max-width",basis);
	$(".panel img").css("min-width",basis);
	$(".panel img:nth-child(2)").css("margin-left",basis);
});
 
$(window).on("load", function() {
   	panelTitles = $('.panel__text');
	panelTitles.each(function(i){
		console.log("width: "+$(this).outerWidth());
		left = $(this).outerWidth()/2.0 - 30 //- $(this).height()/2.0 ;
		bot = $(this).width()/2.0;
		$(this).css('left',-left);
		$(this).css('bottom',bot);
	});


	function fill(){
		$('.preloader-wrapper_top svg g').css('fill','white')
	};

	var $svg1 = $('.preloader-wrapper_top').find('svg').drawsvg({
				duration: 6000,
				reverse: true,
				callback: fill,
			});
			$svg1.drawsvg('animate');

	const leftText =  document.querySelector('.preloader-wrapper_top img')
	const botText =  document.querySelector('.preloader-wrapper_bot img')
	leftText.classList.add('animated', 'fadeInLeft','slow','delay-3s')
	botText.classList.add('animated', 'fadeInUp','slow','delay-3s')
});
