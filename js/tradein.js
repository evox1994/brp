$(document).ready(function(){

	$('body').on('click','.b-1-btn', function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top - 80;
		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});

});