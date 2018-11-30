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

});