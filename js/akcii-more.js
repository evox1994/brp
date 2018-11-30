$(document).ready(function(){

	$('.news-share-block input').val(location.href);
	
	$('.news-share-block').click(function(){
		var span = $(this).find('span');
		$(this).find('input').select();
		document.execCommand('copy');
		$(this).find('span').text('Готово');
		setTimeout(function(){
			span.text('Скопировать');
		},3000);
	});

	function fixScroll(){
		if ( $(window).width() > 767 ) {
			var vg = $('.b-2-wrap').offset().top - 98;
			var ng = vg + $('.b-2-wrap').outerHeight() - $('.fixed-window').outerHeight() - 40;
			var st = $(window).scrollTop();

			if ( st > vg ) {
				if ( st > ng ) {
					$('.fixed-window').removeClass('scroll');
					$('.fixed-window').addClass('bottom');
				} else {
					$('.fixed-window').addClass('scroll');
					$('.fixed-window').removeClass('bottom');
				}
			} else {
				$('.fixed-window').removeClass('scroll');
				$('.fixed-window').removeClass('bottom');
			}
		} else {
			$('.fixed-window').removeClass('scroll');
			$('.fixed-window').removeClass('bottom');
		}
	}
	fixScroll();

	$(window).scroll(function(){
		fixScroll();
	});

});