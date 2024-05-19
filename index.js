let currentSlide = 0;
let autoSlideInterval;
const slideIntervalTime = 5000; 
const userInteractionTimeout = 10000; 
let userActiveTimeout;

function createDots() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slide-dots');
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            changeSlideTo(index);
            handleUserInteraction();
        });
        dotsContainer.appendChild(dot);
    });
    updateActiveDot();
}

function updateActiveDot() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function changeSlideTo(slideIndex) {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;
    
    // Handle looping behavior
    if (slideIndex < 0) {
        currentSlide = slideCount - 1;  // Loop to the last slide
    } else if (slideIndex >= slideCount) {
        currentSlide = 0;  // Loop to the first slide
    } else {
        currentSlide = slideIndex;
    }

    slides.style.transform = `translateX(-${currentSlide * (100 / slideCount)}%)`;
    updateActiveDot();
}

function autoSlide() {
    changeSlideTo(currentSlide + 1); 
}

function handleUserInteraction() {
    if (autoSlideInterval) clearInterval(autoSlideInterval); 
    if (userActiveTimeout) clearTimeout(userActiveTimeout); 
    userActiveTimeout = setTimeout(() => {
        startAutoSlide();
    }, userInteractionTimeout); 
}

function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval); 
    autoSlideInterval = setInterval(autoSlide, slideIntervalTime); 
}

document.querySelector('.nav-arrow.left').addEventListener('click', () => {
    changeSlideTo(currentSlide - 1);
    handleUserInteraction();
});

document.querySelector('.nav-arrow.right').addEventListener('click', () => {
    changeSlideTo(currentSlide + 1);
    handleUserInteraction();
});

document.addEventListener('DOMContentLoaded', () => {
    createDots();
    startAutoSlide(); 
});

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const sliderContainer = document.querySelector('.slider-container');
    const logoPart1 = document.querySelector('.logo-part1');
    const originalBackground = 'url(https://coolbackgrounds.io/images/backgrounds/white/white-canyon-6c5d2a4c.jpg)';
    const alternateBackground = 'url(https://t3.ftcdn.net/jpg/01/36/78/52/360_F_136785269_05hcRhonbg4cyLZFApZWemV7oypynXqd.jpg)';
    const originalSidebarWidth = '160px';  

    function updateToggleButton() {
        toggleButton.innerHTML = sidebar.classList.contains('closed') ? '>' : '<';
        
        toggleButton.style.left = sidebar.classList.contains('closed') ? '0px' : originalSidebarWidth;
        
        sliderContainer.style.paddingLeft = sidebar.classList.contains('closed') ? '0px' : originalSidebarWidth;
        
        logoPart1.style.backgroundImage = sidebar.classList.contains('closed') ? alternateBackground : originalBackground;
    }

    window.toggleSidebar = function() {
        sidebar.classList.toggle('closed');
        updateToggleButton();
    };

    updateToggleButton(); 
});
