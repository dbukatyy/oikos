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

	$('.product__list').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		items: 1,
		autoplay: false,
		animateOut: 'fadeOut',
		nav: false
	});

	$('.reviews__list').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		autoplay: false,
		animateOut: 'fadeOut',
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			}
		}
	});

	$('.catalog,.designers-slider').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		autoplay: false,
		animateOut: 'fadeOut',
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
	});

	baguetteBox.run('.jobs__list,.gallery,.product__list');

	$(document).on('scroll', function (e) {
		var scroll = $(e.target).scrollTop(),
		    header = $('.header');

		scroll > 200 ? header.addClass('min') : header.removeClass('min');

		$('.content').css('background-position', '50% ' + scroll / 40 + '%');
	});

	$('.hamburger').on('click', function (e) {
		$('.hamburger, .menu').toggleClass('active');
	});

	$('.slide-link').on('click', function (e) {
		e.preventDefault();
		var id = $(e.currentTarget).attr('href');

		$('body').animate({
			scrollTop: $('' + id).offset().top - 100
		}, 500);
	});

	$('.designer__text .btn_bordered').on('click', function (e) {
		e.preventDefault();

		$('.form__wrapp').addClass('active');
	});

	$('.form__wrapp').on('click', function (e) {

		var isNoForm = $(e.target).hasClass('form__wrapp');

		if (isNoForm) {

			$(e.currentTarget).removeClass('active');
		}
	});

	// cancelable

	var verticalMax = $('#slider-vertic .max').text(),
	    verticalMin = $('#slider-vertic .min').text(),
	    horizontalMax = $('#slider-horisont .max').text(),
	    horizontalMin = $('#slider-horisont .min').text();

	$('#slider-vertic').slider({
		orientation: "vertical",
		max: 1610,
		min: 490,
		step: 10
	});

	$('#slider-horisont').slider({
		max: 1610,
		min: 490,
		step: 10
	});

	function setSizeInterval(x1, x2, y1, y2) {
		$('#slider-vertic .max').text(y2);
		$('#slider-vertic .min').text(y1);
		$('#slider-horisont .max').text(x2);
		$('#slider-horisont .min').text(x1);

		$('#height').val(y1);
		$('#width').val(x1);

		$('#slider-vertic').slider({
			max: y2 + 10,
			min: y1 - 10,
			value: y1 - 10
		});
		$('#slider-horisont').slider({
			max: x2 + 10,
			min: x1 - 10,
			value: x1 - 10
		});
	}

	$('.view').on('click', function () {
		var data = $(this).data('view'),
		    windows = $('.win__img').filter("[data-view=" + data + "]");

		$('.view, .win__img').removeClass('active');
		$(this).addClass('active');

		if ($(this).data('view') == 'winodw1') {
			setSizeInterval(500, 1600, 500, 1600);
		}

		if ($(this).data('view') == 'winodw2') {
			setSizeInterval(1000, 1600, 1000, 1600);
		}

		if ($(this).data('view') == 'winodw3') {
			setSizeInterval(1600, 2700, 1000, 1600);
		}

		if ($(this).data('view') == 'door') {
			setSizeInterval(600, 1000, 1900, 2200);
		}

		if ($(this).data('view') == 'door2') {
			setSizeInterval(1400, 2200, 1900, 2200);
		}

		windows.addClass('active');
	});

	$('.radio__item').on('click', function () {

		var img = $(this).closest('.radio').siblings('img');

		$(this).siblings('.radio__item').removeClass('active');
		$(this).addClass('active');

		if ($(this).hasClass('none')) {
			img.removeClass('rotates  rotates_x rotates_right').addClass('hides');
		}

		if ($(this).hasClass('rotate')) {

			img.hasClass('right') ? img.removeClass('hides rotates_x').addClass('rotates_right') : img.removeClass('hides rotates_x').addClass('rotates');
		}

		if ($(this).hasClass('rotate_plus')) {
			img.removeClass('hides rotates rotates_right');

			setTimeout(function () {
				img.hasClass('right') ? img.addClass('rotates_right') : img.addClass('rotates');
			}, 200);

			setTimeout(function () {
				img.removeClass('rotates rotates_right').addClass('rotates_x');
			}, 2000);
		}
	});

	$('#slider-vertic').on("slide", function (event, ui) {
		var currentValue = $(this).slider("value");

		$('#height').val(currentValue);
	});

	$('#slider-horisont').on("slide", function (event, ui) {
		var currentValue = $(this).slider("value");

		$('#width').val(currentValue);
	});

	$('#width').change(function (e) {
		var currentValue = $(this).val();

		if (+currentValue > +horizontalMax) {

			$('#slider-horisont').slider("value", horizontalMax);
			$(this).val(horizontalMax);
		} else if (+currentValue < +horizontalMin) {

			$('#slider-horisont').slider("value", horizontalMin);
			$(this).val(horizontalMin);
		} else {

			$('#slider-horisont').slider("value", currentValue);
		}
	});

	$('#height').change(function (e) {
		var currentValue = $(this).val();

		if (+currentValue > +verticalMax) {

			$('#slider-vertic').slider("value", verticalMax);
			$(this).val(verticalMax);
		} else if (+currentValue < +verticalMin) {

			$('#slider-vertic').slider("value", verticalMin);
			$(this).val(verticalMin);
		} else {

			$('#slider-vertic').slider("value", currentValue);
		}
	});

	var window = {};
});