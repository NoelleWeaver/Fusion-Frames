document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = getProductById(productId);

        if (product) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Product added to cart');
        }
    }

    function getProductById(id) {
        const products = [
            { id: '1', name: 'Persol', price: 328, image: './Images/Frames/glassesframes1.avif' },
            // Add more products here
        ];
        return products.find(product => product.id === id);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const sliderContainer = document.querySelector('.shop-container');
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
