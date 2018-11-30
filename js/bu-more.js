$(document).ready(function(){

	$('.image-list li a').click(function(){
		var src = $(this).attr('href');
		$('.b-2-image img').attr('src',src);
		return false;
	});

	$('.par').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parents('.b-2-item').find('.par-wrap').removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).parents('.b-2-item').find('.par-wrap').addClass('active');
		}
	});

});