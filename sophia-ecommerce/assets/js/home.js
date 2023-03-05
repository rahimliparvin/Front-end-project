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

	//BASKET

	let cardBtns = document.querySelectorAll("#carouselcards .swiper .swiper-wrapper button");


	let products = [];

	if (localStorage.getItem("basket") != null) {
		products = JSON.parse(localStorage.getItem("basket"));
	}
	cardBtns.forEach(btn => {
		btn.addEventListener("click", function (e) {
			e.preventDefault();

			let productImage = this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute("src");

			let productName = this.parentNode.parentNode.firstElementChild.children[2].innerText;

			let productPrice = parseInt(this.parentNode.previousElementSibling.previousElementSibling.innerText);

			let productId = parseInt(this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id"));
			
			let existProduct = products.find(m => m.id == productId);

			if (existProduct != undefined) {
				existProduct.count += 1;
			} else {
				products.push({
					id: productId,
					name: productName,
					img: productImage,
					price: productPrice,
					count: 1,

				})
			}

			localStorage.setItem("basket", JSON.stringify(products));

			getBasketCount(products);

		})
	})

	function getBasketCount(arr) {
		let sum = 0;
		for (const item of arr) {
			sum += item.count;
		}
		document.querySelector("#navdown .num").innerText = sum;
	
	};

	getBasketCount(products);



	//WISHLIST

	// let eyesicon = document.querySelectorAll("#carouselcards .eyes");

	// console.log(eyesicon);


    // eyesicon.forEach(eyes => {
		
	// 	eyes.addEventListener("click",function(){


	// 	})
	});


