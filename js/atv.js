$(document).ready(function(){

	$('.filter-btn').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-filter').removeClass('active');
			$('body').removeClass('active');
			$(this).text('Фильтр');
		} else {
			$(this).addClass('active');
			$('.mobile-filter').addClass('active');
			$('body').addClass('active');
			$(this).text('Скрыть');
		}
	});

});