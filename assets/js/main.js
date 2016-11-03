$(function(){

	$(document).foundation();

	$("a[target=_blank]").each(function () {
		$("a").attr('title', 'Open in a new tab');
	});

	var popup = new Foundation.Reveal($('#videoModal'));

	// $('.your-class').slick({
	// 	dots: false,
	// 	speed: 300
	// });

	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
	$('.scroll-top-wrapper').on('click', scrollToTop);

});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}