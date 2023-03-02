$(document).ready(function () {


	//Valyuta 

	let europrice = document.querySelector("#navup .europrice");

	europrice.addEventListener("click", function () {
		let euroPriceText = this.firstElementChild.innerText

		this.parentNode.previousElementSibling.innerText = euroPriceText
	})

	let usdprice = document.querySelector("#navup .usdprice");

	usdprice.addEventListener("click", function () {
		let usdPriceText = this.firstElementChild.innerText

		this.parentNode.previousElementSibling.innerText = usdPriceText
	})


	//SLIDER

	$("#slideshow > div:gt(0)").hide();

	var buttons = "<button class=\"slidebtn prev\"><i class=\"fa fa-chevron-circle-left\"></i></button><button class=\"slidebtn next\"><i class=\"fa fa-chevron-circle-right\"></i></button\>";

	var slidesl = $('.slideitem').length
	var d = "<li class=\"dot active-dot\">&bull;</li>";
	for (var i = 1; i < slidesl; i++) {
		d = d + "<li class=\"dot\">&bull;</li>";
	}
	var dots = "<ul class=\"slider-dots\">" + d + "</ul\>";

	$("#slideshow").append(dots).append(buttons);
	var interval = setInterval(slide, 3000);

	function intslide(func) {
		if (func == 'start') {
			interval = setInterval(slide, 3000);
		} else {
			clearInterval(interval);
		}
	}

	function slide() {
		sact('next', 0, 1200);
	}

	function sact(a, ix, it) {
		var currentSlide = $('.current');
		var nextSlide = currentSlide.next('.slideitem');
		var prevSlide = currentSlide.prev('.slideitem');
		var reqSlide = $('.slideitem').eq(ix);

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();
		var prevDot = currentDot.prev();
		var reqDot = $('.dot').eq(ix);

		if (nextSlide.length == 0) {
			nextDot = $('.dot').first();
			nextSlide = $('.slideitem').first();
		}

		if (prevSlide.length == 0) {
			prevDot = $('.dot').last();
			prevSlide = $('.slideitem').last();
		}

		if (a == 'next') {
			var Slide = nextSlide;
			var Dot = nextDot;
		}
		else if (a == 'prev') {
			var Slide = prevSlide;
			var Dot = prevDot;
		}
		else {
			var Slide = reqSlide;
			var Dot = reqDot;
		}

		currentSlide.fadeOut(it).removeClass('current');
		Slide.fadeIn(it).addClass('current');

		currentDot.removeClass('active-dot');
		Dot.addClass('active-dot');
	}

	$('.next').on('click', function () {
		intslide('stop');
		sact('next', 0, 400);
		intslide('start');
	});//next

	$('.prev').on('click', function () {
		intslide('stop');
		sact('prev', 0, 400);
		intslide('start');
	});//prev

	$('.dot').on('click', function () {
		intslide('stop');
		var index = $(this).index();
		sact('dot', index, 400);
		intslide('start');
	});//prev
	//slideshow

	$('.carousel .carousel-item').each(function () {
		var minPerSlide = 4;
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i = 0; i < minPerSlide; i++) { next = next.next(); if (!next.length) { next = $(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); }
	});





	var swiper = new Swiper(".mySwiper", {
		loop: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	var swiper = new Swiper(".carousel", {
		slidesPerView: 4,
		spaceBetween: 30,
		centeredSlides: true,
		pagination: {
			el: ".swiper-paginations",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	})

	// let cardsicon = document.querySelector("#carouselcards .carouselcard1");




	// cardsicon.addEventListener("mouseover", function () {

	// 	let icon = document.querySelector(".cardicons");
	// 	icon.classList.remove("d-none")
	// })
	
	// cardsicon.addEventListener("mouseleave", function () {

	// 	let icon = document.querySelector(".cardicons");
	// 	icon.classList.add("d-none")
	// })





})



// var swiper = new Swiper(".mySwiper", {
// 	loop:true,
// 	spaceBetween: 30,
// 	centeredSlides: true,
// 	autoplay: {
// 	  delay: 2500,
// 	  disableOnInteraction: false,
// 	},
// 	pagination: {
// 	  el: ".swiper-pagination",
// 	  clickable: true,
// 	},
// });

// var swiper = new Swiper(".carousel", {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     centeredSlides: true,
//     pagination: {
//       el: ".swiper-paginations",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     }
// })