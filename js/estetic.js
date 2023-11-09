	
$(document).ready(function() {
	
	$('#slides').superslides();
	
	$('#prject-slides').superslides({
		inherit_width_from: '.wide-container',
		inherit_height_from: '.wide-container'
	});
	
	
	$(".mobile_menu_button").click(function() {
		$('.top-nav').toggleClass('open');
	});
});	