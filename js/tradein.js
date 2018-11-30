$(document).ready(function(){

	$('body').on('click','.file-input',function(){
		$(this).parents('.input-wrap').find('input[type="file"]').click();
		return false;
	});
	$('body').on('change','.input-wrap input[type="file"]',function(){
		files = this.files;
		$(this).parents('.input-wrap').find('.file-input').text(files[0].name);
		$(this).parents('.input-wrap').find('.file-input').addClass('active');
	});

});