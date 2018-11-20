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

	$('.subfilter-item.drop').click(function(){
		if ( $(this).hasClass('active') ){
			$('.subfilter-item.drop').removeClass('active');
		} else {
			$('.subfilter-item.drop').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('body').on('click',function(e){
		if ( !$(e.target).parents('.subfilter-item.drop').length ){
			$('.subfilter-item.drop').removeClass('active');
		}
	});

});