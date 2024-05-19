document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const cartItemsContainer = document.querySelector('.cart-items');
    const orderSummaryContainer = document.querySelector('.order-summary');

    function loadCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        } else {
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'flex', 'justify-between', 'items-center', 'p-4', 'border-b', 'border-gray-200');
                cartItem.innerHTML = `
                    <div class="flex items-center">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 mr-4">
                        <div>
                            <h2 class="font-bold">${item.name}</h2>
                            <div class="flex items-center">
                                <button class="decrease-qty bg-gray-200 p-1 rounded" data-index="${index}">-</button>
                                <span class="mx-2">${item.quantity}</span>
                                <button class="increase-qty bg-gray-200 p-1 rounded" data-index="${index}">+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="font-bold">$${(item.price * item.quantity).toFixed(2)}</p>
                        <button class="remove-from-cart text-red-500" data-index="${index}">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }
        updateOrderSummary();
    }

    function updateOrderSummary() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        let shipping = 10.00;
        let taxRate = 0.056; // Arizona tax rate
        let tax = subtotal * taxRate;
        let total = subtotal + shipping + tax;

        orderSummaryContainer.innerHTML = `
            <div class="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>$${subtotal.toFixed(2)}</p>
            </div>
            <div class="flex justify-between mb-2">
                <p>Shipping</p>
                <p>$${shipping.toFixed(2)}</p>
            </div>
            <div class="flex justify-between mb-2">
                <p>Taxes</p>
                <p>$${tax.toFixed(2)}</p>
            </div>
            <div class="flex justify-between font-bold mb-2">
                <p>Order Total</p>
                <p>$${total.toFixed(2)}</p>
            </div>
            <button class="checkout-button">Checkout</button>
        `;

        // Attach event listener to the checkout button
        document.querySelector('.checkout-button').addEventListener('click', handleCheckout);
    }

    function handleCheckout() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to the cart before checking out.');
        } else {
            window.location.href = './thankyou.html';
        }
    }

    cartItemsContainer.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (event.target.classList.contains('remove-from-cart')) {
            cart.splice(index, 1);
        } else if (event.target.classList.contains('increase-qty')) {
            cart[index].quantity += 1;
        } else if (event.target.classList.contains('decrease-qty')) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    });

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

    window.cartInitialized = true;
});
