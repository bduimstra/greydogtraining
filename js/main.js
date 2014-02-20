$(document).ready(function() {
	$('.mobile-nav, nav ul li a').on('click', function() {
		if ($('nav ul').is(':visible')) {
			$('nav ul').slideUp(200);
		} else {
			$('nav ul').slideDown(200);
		}
	});
});
