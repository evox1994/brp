$(document).ready(function(){

	function scrollHeader(){
		if ( $(window).width() > 767 ) {
			var st = $(window).scrollTop();
			if ( st > 0 ) {
				$('.header').addClass('active');
			} else {
				$('.header').removeClass('active');
			}
		} else {
			$('.header').removeClass('active');
		}
	}
	scrollHeader();

	$(window).scroll(function(){
		scrollHeader();
	});

	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$('.mobile-btn').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('active');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('active');
		}
	});

	$('.close-btn').click(function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('active');
	});

	$('.drop-close').click(function(){
		$(this).parents('.drop-triangle').addClass('active');
		setTimeout(function(){
			$('.drop-triangle').removeClass('active');
		},500);
	});

	$('.fancybox').fancybox();

	$('body').on('click','.file-input',function(){
		$(this).parents('.input-wrap').find('input[type="file"]').click();
		return false;
	});
	$('body').on('change','.input-wrap input[type="file"]',function(){
		files = this.files;
		$(this).parents('.input-wrap').find('.file-input').text(files[0].name);
		$(this).parents('.input-wrap').find('.file-input').addClass('active');
	});
	$('.add-photo').click(function(){
		$('.photo-wrap').append('<div class="input-wrap"><div class="file-input">Прикрепите фотографию</div><input type="file" accept=".gif,.jpg,.png,.svg"></div>');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).closest('form').find('.button-text .radio-btn').hasClass('active') ) {
			$(this).closest('form').find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
			$(this).closest('form').find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).closest('form').find('.button-text .radio-btn').addClass('error');
			event.preventDefault();
		}
	});

});