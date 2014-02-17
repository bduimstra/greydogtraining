$(document).ready(function() {
	$('.mobile-nav').on('click', function() {
		if ($('nav ul').is(':visible')) {
			$('nav ul').slideUp(200);
		} else {
			$('nav ul').slideDown(200);
		}
	});
});
