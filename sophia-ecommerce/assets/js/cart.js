$(document).ready(function () {


    let tableBody = document.querySelector("tbody");
    let products = JSON.parse(localStorage.getItem("basket"));


  

    products.forEach(product => {


       

        tableBody.innerHTML += `<tr>
     <td>
     <img src="${product.img}" alt="">
     </td>
    <td><span>${product.name}</span></td>
    <td><span class="price">${product.price}</span></td>
    <td><i id="${product.id}" class="fa-solid fa-minus"></i><input disabled type="number" value = ${product.count} !important /><i id="${product.id}" class="fa-solid fa-plus"></i></td>
    <td><span class="totalprice"">${(product.price) * (product.count)}</span></td>

    </tr>`

        let pluses = document.querySelectorAll(".fa-plus");

        getPlus();

      

     function getPlus() {
        
        pluses.forEach(plus => {

            plus.addEventListener("click", function () {

                let existProduct = products.find(m => m.id == plus.id);
                existProduct.count += 1;
                existProduct.price = product.price * existProduct.count;

                

                localStorage.setItem("basket", JSON.stringify(products));



               
            })
        });
     }


    });

})