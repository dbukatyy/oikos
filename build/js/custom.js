'use strict';

jQuery(document).ready(function () {

	$('.slider').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		items: 1,
		autoplay: true,
		animateOut: 'fadeOut'
	});

	$('.slider-plus,.news').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		items: 1,
		autoplay: true,
		animateOut: 'fadeOut',
		nav: true
	});

	$('.catalog').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		items: 1,
		autoplay: false,
		animateOut: 'fadeOut',
		nav: false
	});
});