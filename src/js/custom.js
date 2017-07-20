jQuery(document).ready(function () {

	$('.slider').owlCarousel({
	    loop:true,
	    margin:10,
	    dots:true,
	    items:1,
	    autoplay: true,
	    animateOut: 'fadeOut'
	})


	$('.slider-plus,.news').owlCarousel({
	    loop:true,
	    margin:10,
	    dots:false,
	    items:1,
	    autoplay: true,
	    animateOut: 'fadeOut',
	    nav:true
	})

	$('.catalog').owlCarousel({
	    loop:true,
	    margin:10,
	    dots: true,
	    items:1,
	    autoplay: false,
	    animateOut: 'fadeOut',
	    nav: false
	})

	$('.reviews__list').owlCarousel({
	    loop:true,
	    margin:10,
	    dots: true,
	    items:2,
	    autoplay: false,
	    animateOut: 'fadeOut',
	    nav: false
	})

	baguetteBox.run('.jobs__list');


	$(document).on('scroll', e => {
		const scroll = $(e.target).scrollTop(),
			  header = $('.header');

	    (scroll > 200) ? header.addClass('min') : header.removeClass('min');

	    $('.content').css('background-position', `50% ${scroll/40}%`);
	 
			
	});

	$('.hamburger').on('click', e => {
		$('.hamburger, .menu').toggleClass('active');
	})
	

});


