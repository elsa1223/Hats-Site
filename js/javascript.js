$(document).ready(function() {
	$('#logo').on("mouseenter", function() {
		$(this).attr('src', 'img/lolgo-wink.jpg');
	});

	$('#logo').on("mouseleave", function() {
		$(this).attr('src', 'img/lolgo.jpg');
	});
});