const gallery2__slider = document.querySelector(".gallery2__slider");
const gallery2_prev = document.getElementById("gallery2_prev");
const gallery2_next = document.getElementById("gallery2_next");
const gallerySlides = Array.from(gallery2__slider.querySelectorAll("img"));
const slideCount = gallerySlides.length;
let slideIndex = 0;

// Previous slide function
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Next slide function
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Slider update
function updateSlider() {
  gallerySlides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}
updateSlider();
