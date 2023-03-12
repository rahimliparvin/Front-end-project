$(document).ready(function () {



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










    let tableBody = document.querySelector("tbody");

    let products = JSON.parse(localStorage.getItem("basket"));



    if (products == null) {

        let table = document.querySelector("table")

       table.classList.add("d-none");


        let infobasket = document.querySelector(".infoBasket")

        infobasket.classList.remove("d-none");

        let getShopping = document.querySelector(".getShopping");

        getShopping.classList.remove("d-none");

        let continueShopping = document.querySelector(".continueShopping");

        continueShopping.classList.add("d-none");

        let grand = document.querySelector(".grand");

        grand.classList.add("d-none");

        let granddollar = document.querySelector(".granddollar");

        granddollar.classList.add("d-none");

        let grandtotalprice = document.querySelector(".grandtotalprice");

        grandtotalprice.classList.add("d-none");

        let procedCheckout = document.querySelector(".procedCheckout");

        procedCheckout.classList.add("d-none");
    }


    let grandtotalprices = document.querySelector(".grandtotalprice");

    let sum = 0;

    products.forEach(product => {

        sum += product.total;
    });

    grandtotalprices.innerText = sum;




    products.forEach(product => {

        tableBody.innerHTML += `<tr data-id="${product.id}" >
     <td>
     <img src="${product.img}" alt="">
     </td>
    <td class="tdname"><span>${product.name}</span></td>
    <td class="tdprice"><span class="price">${product.price}<span class="zeros">.00</span></span></td>
    <td class="tdcount"><i data-id="${product.id}" class="fa-solid fa-minus"></i><input  data-id="${product.id}" class="countinput" disabled type="number" value = ${product.count} !important min="1" !important /><i data-id="${product.id}" class="fa-solid fa-plus"></i></td>
    <td class="tdtotal"><span  data-id="${product.id}" class="totalprice">${product.total}</span><span class="zeros">.00</span></td>
    <td class="tdaction"><i  data-id="${product.id}" class="fa-solid fa-x deleteicon"></i></td>

    </tr>`


    });



    //PLUS(PRODUCT'S PRICE PLUS)
    let pluses = document.querySelectorAll(".fa-plus");

    getPlus();

    function getPlus() {

        pluses.forEach(plus => {

            plus.addEventListener("click", function (e) {

                e.preventDefault();


                let existProduct = products.find(m => m.id == this.getAttribute("data-id"));

                existProduct.count += 1;
                existProduct.total += existProduct.price;

                let sum = 0;

                products.forEach(product => {

                    sum += product.total;
                });

                grandtotalprices.innerText = sum;



                let inputs = document.querySelectorAll(".countinput");

                for (const input of inputs) {


                    if (input.getAttribute("data-id") == this.getAttribute("data-id")) {

                        input.value = existProduct.count;
                    }



                    let totalprices = document.querySelectorAll(".totalprice");

                    for (const totalprice of totalprices) {


                        if (totalprice.getAttribute("data-id") == this.getAttribute("data-id")) {

                            totalprice.innerText = existProduct.total;

                        }
                    }


                    localStorage.setItem("basket", JSON.stringify(products));

                }

            })

        })

    }


    //Minus(PRODUCT'S PRICE MINUS)
    let minuses = document.querySelectorAll(".fa-minus");

    getMinus();

    function getMinus() {

        minuses.forEach(minus => {

            minus.addEventListener("click", function (e) {

                e.preventDefault();


                let existProduct = products.find(m => m.id == this.getAttribute("data-id"));


                if (existProduct.count == 1) {

                    return;
                }

                existProduct.count -= 1;
                existProduct.total -= existProduct.price;

                let sum = 0;

                products.forEach(product => {

                    sum += product.total;
                });

                grandtotalprices.innerText = sum;



                let inputs = document.querySelectorAll(".countinput");

                for (const input of inputs) {


                    if (input.getAttribute("data-id") == this.getAttribute("data-id")) {

                        input.value = existProduct.count;
                    }

                }



                let totalprices = document.querySelectorAll(".totalprice");

                for (const totalprice of totalprices) {


                    if (totalprice.getAttribute("data-id") == this.getAttribute("data-id")) {

                        totalprice.innerText = existProduct.total;

                    }
                }

                localStorage.setItem("basket", JSON.stringify(products));


            })

        })

    }


    //Delete


    let deleteicons = document.querySelectorAll(".deleteicon")

     deleteicons.forEach(deleteicon => {

        deleteicon.addEventListener("click", function () {




            let products = JSON.parse(localStorage.getItem("basket"));



            if (products.length == 1) {
                
                localStorage.removeItem("basket");

                let table = document.querySelector(".table");

                table.innerHTML = "";

                let infobasket = document.querySelector(".infoBasket")
    
                infobasket.classList.remove("d-none");
    
                let getShopping = document.querySelector(".getShopping");
    
                getShopping.classList.remove("d-none");
    
                let continueShopping = document.querySelector(".continueShopping");
    
                continueShopping.classList.add("d-none");
    
                let grand = document.querySelector(".grand");
    
                grand.classList.add("d-none");
    
                let granddollar = document.querySelector(".granddollar");
    
                granddollar.classList.add("d-none");
    
                let grandtotalprice = document.querySelector(".grandtotalprice");
    
                grandtotalprice.classList.add("d-none");
    
                let procedCheckout = document.querySelector(".procedCheckout");
    
                procedCheckout.classList.add("d-none");

                return;


            }
           

            for (const product of products) {
                
                if (product.id == this.getAttribute("data-id")) {

                    let prod = products.indexOf(product);

                    products.splice(prod, 1);


                    let trs = document.querySelectorAll("tr");

                    for (const tr of trs) {

                        if (tr.getAttribute("data-id") == this.getAttribute("data-id")) {

                            tr.classList.add("d-none");
                        }
                    }


                }
            }
            localStorage.setItem("basket", JSON.stringify(products));

            let sum = 0;

            let productss = JSON.parse(localStorage.getItem("basket"));

            productss.forEach(product => {

                sum += product.total;

                grandtotalprices.innerText = sum;

                
            });


            let productsss = JSON.parse(localStorage.getItem("basket"));

            if (productsss.length == 0) {
    
                localStorage.removeItem("basket");
    
                let table = document.querySelector("table")
    
                table.classList.add("d-none");
    
    
                let infobasket = document.querySelector(".infoBasket")
    
                infobasket.classList.remove("d-none");
    
                let getShopping = document.querySelector(".getShopping");
    
                getShopping.classList.remove("d-none");
    
                let continueShopping = document.querySelector(".continueShopping");
    
                continueShopping.classList.add("d-none");
    
                let grand = document.querySelector(".grand");
    
                grand.classList.add("d-none");
    
                let granddollar = document.querySelector(".granddollar");
    
                granddollar.classList.add("d-none");
    
                let grandtotalprice = document.querySelector(".grandtotalprice");
    
                grandtotalprice.classList.add("d-none");
    
                let procedCheckout = document.querySelector(".procedCheckout");
    
                procedCheckout.classList.add("d-none");
            }


        });



       
    })



    
});



