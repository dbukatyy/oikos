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

	$('.product__list').owlCarousel({
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
	    autoplay: false,
	    animateOut: 'fadeOut',
	    nav: false,
	    responsive : {
		    0 : {
		           items:1,
		    },   
		    768 : {
		          items:2
		    }
		}
	})

	$('.catalog,.designers-slider').owlCarousel({
	    loop:true,
	    margin:10,
	    dots: true,
	    autoplay: false,
	    animateOut: 'fadeOut',
	    nav: false,
	    responsive : {
		    0 : {
		           items:1,
		    },   
		    768 : {
		          items:3
		    },
		    992 : {
		          items:4
		    }
		}
	})

	baguetteBox.run('.jobs__list,.gallery,.product__list');


	$(document).on('scroll', e => {
		const scroll = $(e.target).scrollTop(),
			  header = $('.header');

	    (scroll > 200) ? header.addClass('min') : header.removeClass('min');

	    $('.content').css('background-position', `50% ${scroll/40}%`);
	 
			
	});

	$('.hamburger').on('click', e => {
		$('.hamburger, .menu').toggleClass('active');
	})
	
	$('.slide-link').on('click', e => {
		e.preventDefault();
		const id = $(e.currentTarget).attr('href');
		
		$('body').animate({
			scrollTop: $(`${id}`).offset().top - 100
		},500) 
	})

	$('.designer__text .btn_bordered').on('click', e => {
		e.preventDefault();

		$('.form__wrapp').addClass('active');
	});

	$('.form__wrapp').on('click', e => {
		
		const isNoForm = $(e.target).hasClass('form__wrapp');

		if(isNoForm) {

			$(e.currentTarget).removeClass('active');
		}

	});

});


