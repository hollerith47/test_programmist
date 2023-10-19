// const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
// const navLinks = document.querySelector("#nav-links");
const sidebar = document.querySelector("#sidebar");

// window.addEventListener("scroll", function () {
//     if (window.pageYOffset > 80) {
//         navbar.classList.add("navbar-fixed");
//         navLinks.classList.add("nav-links-container-fixed")
//     } else {
//         navbar.classList.remove("navbar-fixed");
//         navLinks.classList.remove("nav-links-container-fixed")
//     }
// });

navBtn.addEventListener("click", function(){
    sidebar.classList.add("show-sidebar");
    closeBtn.classList.add("show-close");
    navBtn.classList.add("close-burger");
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
    closeBtn.classList.remove("show-close");
    navBtn.classList.remove("close-burger");
})

const sliderContainer = document.querySelector('#slider-container');
const slides = sliderContainer.querySelectorAll(".section.check-up");
const nextSlide = document.querySelector("#next-slide");
const previousSlide = document.querySelector("#previous-slide");
const currentSlideContenair = document.querySelector("#currentSlide")
let currentSlide = 0;

function showSlide(index){
    slides.forEach((slide)=>{
        slide.style.opacity = 0;
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
    slides[index].style.opacity = 1;
}

showSlide(currentSlide);

function getNextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    currentSlideContenair.innerHTML = currentSlide + 1;
    console.log(currentSlide)
}

function getPreviousSlide(){
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    // console.log(currentSlide);
    currentSlideContenair.innerHTML = currentSlide + 1;

}

nextSlide.addEventListener('click', getNextSlide);
previousSlide.addEventListener('click', getPreviousSlide);

