
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})





/*Search Box Start */

const search = document.querySelector(".search");
const close = document.querySelector(".close");

const searchBox = document.querySelector(".searchBox");

search.onclick = function () {
    searchBox.classList.add('active');
}

close.onclick = function () {
    searchBox.classList.remove('active');
}
/*Search Box End */


const all = document.querySelector("#all_products");
const fruits = document.querySelector("#fruits_products");
const vegetables = document.querySelector("#vegetables_products");
const wheats = document.querySelector("#wheat_products");
const others = document.querySelector("#other_products");


const alls_btn = document.querySelector(".all_btn");
const fruit_btn = document.querySelector('.fruits_btn');
const vegetable_btn = document.querySelector('.vegetables_btn');
const wheats_btn = document.querySelector('.wheat_btn');
const others_btn = document.querySelector('.other_btn');




const all_btn=()=>{
    all.classList.value = "d-block container";
    fruits.classList.value = "d-none";
    vegetables.classList.value = "d-none";
    wheats.classList.value = "d-none";
    others.classList.value = "d-none";

    if (alls_btn.style.color = "#91B40D") {
        fruit_btn.style.color = "#2A332B";
        vegetable_btn.style.color = "#2A332B"
        wheats_btn.style.color = "#2A332B"
        others_btn.style.color = "#2A332B"
    } else {
        alls_btn.style.color = "#2A332B"
    }
};

 const fruits_btn= ()=> {
    all.classList.value = "d-none";
    fruits.classList.value = "d-block container";
    vegetables.classList.value = "d-none";
    wheats.classList.value = "d-none";
    others.classList.value = "d-none";

    if (fruit_btn.style.color = "#91B40D") {
        alls_btn.style.color = "#2A332B";
        vegetable_btn.style.color = "#2A332B"
        wheats_btn.style.color = "#2A332B"
        others_btn.style.color = "#2A332B"
    } else {
        alls_btn.style.color = "#2A332B"
    }

};

const vegetables_btn= ()=>{

    all.classList.value = "d-none";
    fruits.classList.value = "d-none";
    vegetables.classList.value = "d-block container";
    wheats.classList.value = "d-none";
    others.classList.value = "d-none";

    if (vegetable_btn.style.color = "#91B40D") {
        alls_btn.style.color = "#2A332B";
        fruit_btn.style.color = "#2A332B"
        wheats_btn.style.color = "#2A332B"
        others_btn.style.color = "#2A332B"
    } else {
        vegetable_btn.style.color = "#2A332B"
    }

}

wheat_btn= ()=> {

    all.classList.value = "d-none";
    fruits.classList.value = "d-none";
    vegetables.classList.value = "d-none";
    wheats.classList.value = "d-block container";
    others.classList.value = "d-none";


    if (wheats_btn.style.color = "#91B40D") {
        alls_btn.style.color = "#2A332B";
        fruit_btn.style.color = "#2A332B";
        vegetable_btn.style.color = "#2A332B";
        others_btn.style.color = "#2A332B";
    } else {
        wheats_btn.style.color = "#2A332B";
    }

};

const other_btn=()=> {

    all.classList.value = "d-none";
    fruits.classList.value = "d-none";
    vegetables.classList.value = "d-none";
    wheats.classList.value = "d-none";
    others.classList.value = "d-block container";


    if (others_btn.style.color = "#91B40D") {
        alls_btn.style.color = "#2A332B";
        fruit_btn.style.color = "#2A332B";
        vegetable_btn.style.color = "#2A332B";
        wheats_btn.style.color = "#2A332B";

    } else {
        other_btn.style.color = "#2A332B";
    }

};


/* index end*/
// $('[data-fancybox]').fancybox({
//     // Options will go here
//     buttons: [
//         'close'
//     ],
//     // wheel: false,
//     transitionEffect: "slide",
//     // thumbs: false,
//     // hash: false,
//     loop: true,
//     keyboard: true,
//     // toolbar: false,
//     // animationEffect: false,
//     arrows: true,
//     // clickContent: false
// });




/*About Gallery*/


const about_gallery_img1 = document.getElementById('about_gallery_img1');
const about_gallery_img2 = document.getElementById("about_gallery_img2")
const about_gallery_img3 = document.getElementById("about_gallery_img3")




const about_gallery_btn1 =()=>{
    about_gallery_img1.classList.value = "d-flex ";
    about_gallery_img2.classList.value = "d-none ";
    about_gallery_img3.classList.value = "d-none ";
}

const about_gallery_btn2 =()=>{
    about_gallery_img1.classList.value = "d-none";
    about_gallery_img2.classList.value = "d-flex";
    about_gallery_img3.classList.value = "d-none";
}

const about_gallery_btn3 =()=>{
    about_gallery_img1.classList.value = "d-none";
    about_gallery_img2.classList.value = "d-none";
    about_gallery_img3.classList.value = "d-flex";
}

