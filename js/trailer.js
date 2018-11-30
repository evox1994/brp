$(document).ready(function(){

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