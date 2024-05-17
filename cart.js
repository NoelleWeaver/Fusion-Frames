document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    if (!window.cartInitialized) {
        const cartItemsContainer = document.querySelector('.cart-items');
        const checkoutButton = document.querySelector('.checkout-button');

        function loadCart() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cartItemsContainer.innerHTML = '';

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
            } else {
                cart.forEach((item, index) => {
                    const cartItem = document.createElement('div');
                    cartItem.classList.add('cart-item');
                    cartItem.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <h2>${item.name}</h2>
                            <p>$${item.price}</p>
                            <button class="remove-from-cart" data-index="${index}">Remove</button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(cartItem);
                });
            }
        }

        cartItemsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('remove-from-cart')) {
                const index = event.target.getAttribute('data-index');
                removeFromCart(index);
            }
        });

        checkoutButton.addEventListener('click', () => {
            window.location.href = './thankyou.html';
        });

        function removeFromCart(index) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }

        loadCart();

        const sidebar = document.querySelector('.sidebar');
        const toggleButton = document.querySelector('.sidebar-toggle');
        const sliderContainer = document.querySelector('.cart-container');
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

        // Set the flag to indicate that event listeners are initialized
        window.cartInitialized = true;
    } else {
        console.log('Cart listeners already initialized');
    }
});
