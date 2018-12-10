$(document).ready(function(){

	$('.b-1-slider').slick();
	$('.b-7-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
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
	$('.b-7-slide a').click(function(){
		var src = $(this).attr('href');
		$('.b-7-image img').attr('src',src);
		return false;
	});

});