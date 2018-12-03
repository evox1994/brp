$(document).ready(function(){

	$('.b-2-slider').slick({
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

	$('.add-btn').click(function(){
		$(this).parent().find('.add-wrap').append('<input type="text" placeholder="Номер артикула">');
	});

});