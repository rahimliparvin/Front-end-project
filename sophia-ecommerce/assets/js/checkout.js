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











})