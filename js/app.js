const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
    closeBtn.classList.add("show-close");
    navBtn.classList.add("close-burger");
})

closeBtn.addEventListener("click", function () {
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

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.opacity = 0;
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
    slides[index].style.opacity = 1;
}

showSlide(currentSlide);

function getNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    currentSlideContenair.innerHTML = currentSlide + 1;
    console.log(currentSlide)
}

function getPreviousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    currentSlideContenair.innerHTML = currentSlide + 1;

}

nextSlide.addEventListener('click', getNextSlide);
previousSlide.addEventListener('click', getPreviousSlide);


// pop-up

const form = document.querySelectorAll("form");
const popup = document.querySelector("#popup");
const popupMessage = document.querySelector("#popup-message");
const popupBg = document.querySelector("#popup-bg")

form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    })
        .then(res => res.text())
        .then(data => {
            popupMessage.textContent = data;
            popup.style.display = "block";
            popupBg.style.display = "block";

            setTimeout(function () {
                popup.style.display = "none";
                popupBg.style.display = "none";
            }, 5000)
        })
        .catch(error => {
            console.error("error occurred", error);
        })
})

