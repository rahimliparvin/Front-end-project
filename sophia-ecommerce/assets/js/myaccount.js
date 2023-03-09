$(document).ready(function () {



    let submitbuttons = document.querySelectorAll(".loginsubmit");

    submitbuttons.forEach(submitbutton => {


        submitbutton.addEventListener("click", function () {


            if (this.previousElementSibling.previousElementSibling.firstElementChild.value.trim() == "" ||
                this.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.value.trim() == "") {

                this.previousElementSibling.previousElementSibling.lastElementChild.classList.remove("d-none");
                this.previousElementSibling.lastElementChild.classList.remove("d-none");


            }
        })
    });
})