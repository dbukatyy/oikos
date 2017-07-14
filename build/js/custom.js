'use strict';

jQuery(document).ready(function () {

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		items: 1,
		autoplay: true,
		animateOut: 'fadeOut'
	});
});