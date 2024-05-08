let currentSlide = 0;
function adjustSlideWidths() {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;
    const slideWidth = 100 / slideCount; // Each slide should take a fraction of 100% based on count
    slides.style.width = `${100 * slideCount}%`; // Total width of all slides combined
    Array.from(slides.children).forEach(slide => {
      slide.style.width = `${slideWidth}%`; // Set each slide's width to this fraction
    });
  }
  
  function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;
    currentSlide = (currentSlide + direction + slideCount) % slideCount;
    slides.style.transform = `translateX(-${currentSlide * (100 / slideCount)}%)`;
  }
  
  adjustSlideWidths(); // Call this function initially and on any event that changes the number of slides
  