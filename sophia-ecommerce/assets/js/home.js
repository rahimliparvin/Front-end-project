$(document).ready(function () {


	//Valyuta 

	let europrice = document.querySelector("#navup .europrice");

	europrice.addEventListener("click", function () {

		let euroPriceText = this.firstElementChild.innerText;

		this.parentNode.previousElementSibling.innerText = euroPriceText;
	})

	let usdprice = document.querySelector("#navup .usdprice");

	usdprice.addEventListener("click", function () {
		let usdPriceText = this.firstElementChild.innerText;

		this.parentNode.previousElementSibling.innerText = usdPriceText;
	})




	//flag====================================================




	let liflags = document.querySelectorAll(".dropdown-secondmenu li");


	liflags.forEach(liflag => {

		liflag.addEventListener("click", function () {

			this.parentNode.previousElementSibling.children[0].setAttribute('src', this.children[0].getAttribute("src"));
			this.parentNode.previousElementSibling.children[1].innerText = this.children[1].innerText;
		})
	});












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


	//carousel
	var swiper = new Swiper(".carousel", {
		slidesPerView: 8,
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


	//takeGrandTotalPrice();

	let cardBtns = document.querySelectorAll("#carouselcards .swiper .swiper-wrapper button");

	let products = [];

	if (localStorage.getItem("basket") != null) {
		products = JSON.parse(localStorage.getItem("basket"));
		let prag = document.querySelector(".ullist p");
		prag.classList.add("d-none");
		creatProductList(products);

		function takeGrandTotalPrice() {

			let spangrandtotalprice = document.querySelector(".minicart .spangrandtotalprice");

			let products = JSON.parse(localStorage.getItem("basket"));

			let sum = 0;

			products.forEach(product => {

				sum += product.total;

			});

			spangrandtotalprice.innerText = sum;


			let trashicons = document.querySelectorAll(".ullist .trash");

			trashicons.forEach(trashicon => {



				trashicon.addEventListener("click", function () {



					let products = JSON.parse(localStorage.getItem("basket"));



					let filtredproduct = products.find(m => m.id == trashicon.getAttribute("data-id"));


					let prod = products.indexOf(filtredproduct);

					products.splice(prod, 1);

					let num = document.querySelector(".num");

					let itemcount = document.querySelector(".itemcount");

					num.innerText = products.length;

					itemcount.innerText = products.length;



					localStorage.setItem("basket", JSON.stringify(products));


					takeGrandTotalPrice();

					this.parentNode.remove();

					let res = localStorage.getItem("basket");

					if (res.length == 0) {
						localStorage.clear()

						let subtotalprice = document.querySelector(".subtotalprice");

						subtotalprice.classList.add("d-none");

					}

				})



			});







		}

		takeGrandTotalPrice();
	}


	cardBtns.forEach(btn => {
		btn.addEventListener("click", function (e) {
			e.preventDefault();





			let productImage = this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute("src");

			let productName = this.parentNode.parentNode.firstElementChild.children[2].innerText;

			let productPrice = parseInt(this.parentNode.previousElementSibling.previousElementSibling.innerText);

			let productId = parseInt(this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id"));

			if (JSON.parse(localStorage.getItem("basket")) != null) {
				products = JSON.parse(localStorage.getItem("basket"))
			}

			let existProduct = products.find(m => m.id == productId);



			if (existProduct != undefined) {
				existProduct.count += 1;
				existProduct.total = existProduct.count * existProduct.price;
				let tdproductcounts = document.querySelectorAll(".tdcount");


				tdproductcounts.forEach(tdproductcount => {
					if (tdproductcount.getAttribute("data-id") == productId) {
						tdproductcount.innerText = existProduct.count;
					}
				});


				let trashicons = document.querySelectorAll(".ullist .trash");

				trashicons.forEach(trashicon => {



					trashicon.addEventListener("click", function () {



						let products = JSON.parse(localStorage.getItem("basket"));



						let filtredproduct = products.find(m => m.id == trashicon.getAttribute("data-id"));


						let prod = products.indexOf(filtredproduct);

						products.splice(prod, 1);

						let num = document.querySelector(".num");

						let itemcount = document.querySelector(".itemcount");

						num.innerText = products.length;

						itemcount.innerText = products.length;



						localStorage.setItem("basket", JSON.stringify(products));


						takeGrandTotalPrice();

						this.parentNode.remove();

						let res = localStorage.getItem("basket");

						if (res.length == 0) {
							localStorage.clear();

							subtotalprice.classList.add("d-none");

							let subtotalprice = document.querySelector(".subtotalprice");

							// subtotalprice.classList.add("d-none");

						}

					})



				});


			} else {


				products.push({
					id: productId,
					name: productName,
					img: productImage,
					price: productPrice,
					count: 1,
					total: productPrice * 1

				})

				creatProductList(products);
			}

			getBasketCount(products);

			localStorage.setItem("basket", JSON.stringify(products));

			takeGrandTotalPrice();


			let trashicons = document.querySelectorAll(".ullist .trash");

			trashicons.forEach(trashicon => {



				trashicon.addEventListener("click", function () {



					let products = JSON.parse(localStorage.getItem("basket"));



					let filtredproduct = products.find(m => m.id == trashicon.getAttribute("data-id"));


					let prod = products.indexOf(filtredproduct);

					products.splice(prod, 1);

					let num = document.querySelector(".num");

					let itemcount = document.querySelector(".itemcount");

					num.innerText = products.length;

					itemcount.innerText = products.length;



					localStorage.setItem("basket", JSON.stringify(products));


					takeGrandTotalPrice();

					this.parentNode.remove();

					let res = localStorage.getItem("basket");

					if (res.length == 0) {
						localStorage.clear()

						let subtotalprice = document.querySelector(".subtotalprice");

						subtotalprice.classList.add("d-none");

					}

				})



			});




		});






		function takeGrandTotalPrice() {


			let subtotalprice = document.querySelector(".subtotalprice");
			let spangrandtotalprice = document.querySelector(".minicart .spangrandtotalprice");

			let products = JSON.parse(localStorage.getItem("basket"));

			let sum = 0;

			products.forEach(product => {

				sum += product.total;

			});

			spangrandtotalprice.innerText = sum;

			subtotalprice.innerText = sum;


		}


		getBasketCount(products);

	})

	//Basketcount assigned minicart sup
	function getBasketCount(arr) {

		document.querySelector("#navdown .num").innerText = arr.length;

	};




	//PRODUCTLIST MAKE IN CHECKCARD 

	function creatProductList(arr) {

		let ul = document.querySelector(".ullist");
		ul.innerHTML = "";

		arr.forEach(item => {

			ul.innerHTML += `<li data-id="${item.id}"><span class="tdname">${item.name}</span><i data-id="${item.id}" class="fa-solid fa-trash trash"></i><br><span data-id="${item.id}" class="tdcount">${item.count}</span> X <span data-id="${item.id}" class="tdprice">${item.price}</span></li>`;



			let itemscount = document.querySelector(".itemcount");

			itemscount.innerText = arr.length;


			let subtotal = document.querySelector(".subtotal");

			subtotal.classList.remove("d-none");

			let subtotalprice = document.querySelector(".subtotalprice");

			subtotalprice.classList.remove("d-none");



		});

	}


	// 	 //CHECK CARD

	let cart = document.querySelector(".minicart");

	let getBasketProductList = document.querySelector(".getBasketProductList");

	$(cart).click(function () {
		$(getBasketProductList).toggle();


	});



	//WISHLIST//=====================================================================================




	let wishlistproducts = JSON.parse(localStorage.getItem("wishlist"));

	let likeProducts = [];


	if (wishlistproducts != null) {

		likeProducts = JSON.parse(localStorage.getItem("wishlist"));
	}



	let hearts = document.querySelectorAll(".likeheart")

	hearts.forEach(heart => {

		heart.addEventListener("click", function (e) {

			e.preventDefault();


			let namelike = this.parentNode.parentNode.children[5].children[0].children[2].innerText;

			let pricelike = this.parentNode.parentNode.children[5].children[7].innerText;

			let imglike = this.parentNode.parentNode.children[0].children[0].children[0].getAttribute("src");

			let likeid = this.parentNode.parentNode.parentNode.getAttribute("data-id");

			//	console.log(likeid);


			likeProducts.push({
				id: likeid,
				img: imglike,
				name: namelike,
				price: pricelike,

			})


			localStorage.setItem("wishlist", JSON.stringify(likeProducts));



		})

	});



	
	//MODAL 

	let eyes = document.querySelectorAll(".eyess");

	let modal = document.querySelector(".modal");

	eyes.forEach(item => {

		item.addEventListener("click", function (e) {

			e.preventDefault();

			document.getElementById("overlay").style.display = "block";

			modal.classList.remove("d-none");

			modal.children[2].children[0].children[0].innerText = this.parentNode.nextElementSibling.nextElementSibling.children[0].children[2].innerText;

			modal.children[2].children[0].children[1].children[0].children[1].innerText = this.parentNode.nextElementSibling.nextElementSibling.children[7].innerText * 2;

			modal.children[2].children[0].children[2].children[1].innerText = this.parentNode.nextElementSibling.nextElementSibling.children[7].innerText;

			let img = this.parentNode.parentNode.children[0].children[0].children[0].getAttribute("src");

			modal.children[1].children[0].setAttribute('src', img)






		})
	});


	let overlay = document.getElementById("overlay")


	overlay.addEventListener("click", function () {


		modal.classList.add("d-none");

		overlay.style.display = "none"


	})



	let close = document.querySelector(".close");

	close.addEventListener("click", function () {

		modal.classList.add("d-none");

		document.getElementById("overlay").style.display = "none";

		document.body.style.overflow = "block";
	})
















































})

