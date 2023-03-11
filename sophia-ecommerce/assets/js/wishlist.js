$(document).ready(function () {




    let tableBody = document.querySelector("tbody");

    let products = JSON.parse(localStorage.getItem("wishlist"));


    if (products == null) {

        let table = document.querySelector("table")

        table.classList.add("d-none");

        document.querySelector(".infowishlist").classList.remove("d-none");

        document.querySelector(".getShopping").classList.remove("d-none");

        document.querySelector(".continueShopping").classList.add("d-none");

        document.querySelector(".grand").classList.add("d-none");

        document.querySelector(".granddollar").classList.add("d-none");

        document.querySelector(".grandtotalprice").classList.add("d-none");

        document.querySelector(".procedCheckout").classList.add("d-none");

    }

    else {


        products.forEach(product => {

            tableBody.innerHTML += `<tr data-id="${product.id}" >
     <td>
     <img src="${product.img}" alt="">
     </td>
    <td class="tdname"><span>${product.name}</span></td>
    <td class="tdprice"><span class="price">${product.price}</span></td>
    <td class="tdaction"><i  data-id="${product.id}" class="fa-solid fa-x deleteicon"></i></td>

    </tr>`


        });


    }




    let clearButtun = document.querySelector(".clearAll");


    clearButtun.addEventListener("click", function () {


        localStorage.removeItem("wishlist");

        let table = document.querySelector(".table");

        table.innerHTML = "";

        document.querySelector(".infowishlist").classList.remove("d-none");

        document.querySelector(".getShopping").classList.remove("d-none");

        document.querySelector(".continueShopping").classList.add("d-none");

        document.querySelector(".grand").classList.add("d-none");

        document.querySelector(".granddollar").classList.add("d-none");

        document.querySelector(".grandtotalprice").classList.add("d-none");

        document.querySelector(".procedCheckout").classList.add("d-none");


    })



    // let deleteicons = document.querySelectorAll(".deleteicon")

    // deleteicons.forEach(deleteicon => {




    //     deleteicon.addEventListener("click", function () {

    //         let products = JSON.parse(localStorage.getItem("wishlist"));

    //         for (const product of products) {

    //             if (product.id == this.getAttribute("data-id")) {

    //                 let prod = products.indexOf(product);

    //                 products.splice(prod, 1);


    //                 let trs = document.querySelectorAll("tr");

    //                 for (const tr of trs) {

    //                     if (tr.getAttribute("data-id") == this.getAttribute("data-id")) {

    //                         tr.classList.add("d-none");
    //                     }
    //                 }
    //             }
    //         }

    //         localStorage.setItem("wishlist", JSON.stringify(products));


         
    //     })



    // });


    let deleteicons = document.querySelectorAll(".deleteicon")

    deleteicons.forEach(deleteicon => {




        deleteicon.addEventListener("click", function () {

            let products = JSON.parse(localStorage.getItem("wishlist"));


            if (products.length == 1) {
                
                localStorage.removeItem("wishlist");

                let table = document.querySelector(".table");

                table.innerHTML = "";
        
                document.querySelector(".infowishlist").classList.remove("d-none");
        
                document.querySelector(".getShopping").classList.remove("d-none");
        
                document.querySelector(".continueShopping").classList.add("d-none");
        
                document.querySelector(".grand").classList.add("d-none");
        
                document.querySelector(".granddollar").classList.add("d-none");
        
                document.querySelector(".grandtotalprice").classList.add("d-none");
        
                document.querySelector(".procedCheckout").classList.add("d-none");

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

            localStorage.setItem("wishlist", JSON.stringify(products));


         
        })



    });





































































})