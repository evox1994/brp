$(document).ready(function(){

	$('.b-4-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	$('.b-6-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.par').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parents('li').find('p').removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).parents('li').find('p').addClass('active');
		}
	});

});