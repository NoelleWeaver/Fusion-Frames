let currentSlide = 0;
function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length; // should be 6
    currentSlide = (currentSlide + direction + slideCount) % slideCount;
    slides.style.transform = `translateX(-${currentSlide * (100 / slideCount)}%)`;
}
