document.addEventListener('DOMContentLoaded', function() {
    localStorage.removeItem('cart');

    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const sliderContainer = document.querySelector('.thank-you-container');
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
