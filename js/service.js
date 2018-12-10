$(document).ready(function(){
	$('.b-1-btn').click(function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top - 80;
		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});
});