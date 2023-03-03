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


	const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");

tabLink.forEach((item) => {
  item.addEventListener("click", activeTab);
});

function activeTab(item) {
  const btnTarget = item.currentTarget;
  const content = btnTarget.dataset.content;

  tabContent.forEach((item) => {
    item.classList.remove("is-active");
  });

  tabLink.forEach((item) => {
    item.classList.remove("is-active");
  });

  document.querySelector("#" + content).classList.add("is-active");
  btnTarget.classList.add("is-active");
}



	// let cardsicons = document.querySelectorAll("#carouselcards .swiper-slide");

	// cardsicons.forEach(cardsicon => {

	// 	cardsicon.addEventListener("mouseover", function () {

	// 		let refreshs = document.querySelectorAll(".refresh")

	// 		for (const refresh of refreshs) {
				
	// 			refresh.classList.remove("d-none")

	// 		}


	// 		let hearts = document.querySelectorAll(".heart");
			
	// 		for (const heart of hearts) {
	// 			heart.classList.remove("d-none")
	// 		}

	// 		let eyess = document.querySelectorAll(".eyes");
			
	// 		for (const eyes of eyess) {
	// 			eyes.classList.remove("d-none")
	// 		}

	// 	})


	// 	cardsicon.addEventListener("mouseleave", function () {

	// 		let refresh = document.querySelector(".refresh")

	// 		refresh.classList.add("d-none")

	// 		let heart = document.querySelector(".heart");
	// 		heart.classList.add("d-none")

	// 		let eyes = document.querySelector(".eyes");
	// 		eyes.classList.add("d-none")

	// 	})

	// });


	//  cardsicon.forEach(element => {

	// 	element.addEventListener("mouseover",function(){
	// 		//cardsicon.addEventListener("mouseover", function () {

	// 			let icon = document.querySelector(".heart");
	// 			icon.classList.remove("d-none")
	// 		})

	// 		element.addEventListener("mouseleave", function () {

	// 			let icon = document.querySelector(".heart");
	// 			icon.classList.add("d-none")
	// 		})

	// 		element.addEventListener("mouseover", function () {

	// 			let icon = document.querySelector(".eyes");
	// 			icon.classList.remove("d-none")
	// 		})

	// 		element.addEventListener("mouseleave", function () {

	// 			let icon = document.querySelector(".eyes");
	// 			icon.classList.add("d-none")
	// 		})

	// 		element.addEventListener("mouseover", function () {

	// 			let icon = document.querySelector(".refresh");
	// 			icon.classList.remove("d-none")
	// 		})

	// 		element.addEventListener("mouseleave", function () {

	// 			let icon = document.querySelector(".refresh");
	// 			icon.classList.add("d-none")
	// 		})


	// 		let iconheart = document.querySelector(".heart i")

	// 		iconheart.addEventListener("mouseover",function(){

	// 			this.style.color ="#EF6C00";
	// 		})

	// 		iconheart.addEventListener("mouseleave",function(){

	// 			this.style.color ="#333333";
	// 		})

	// 		let iconeyes = document.querySelector(".eyes i")

	// 		iconeyes.addEventListener("mouseover",function(){

	// 			this.style.color ="#EF6C00";
	// 		})

	// 		iconeyes.addEventListener("mouseleave",function(){

	// 			this.style.color ="#333333";
	// 		})

	// 		let iconrefresh = document.querySelector(".refresh i")

	// 		iconrefresh.addEventListener("mouseover",function(){

	// 			this.style.color ="#EF6C00";
	// 		})

	// 		iconrefresh.addEventListener("mouseleave",function(){

	// 			this.style.color ="#333333";
	//	})
	//	})

	// });






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