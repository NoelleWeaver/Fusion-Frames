document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    // To prevent duplicate event listeners, use a flag
    if (!window.addToCartInitialized) {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', handleAddToCart);
        });

        function handleAddToCart(event) {
            const productId = event.target.getAttribute('data-id');
            addToCart(productId);
        }

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
                { id: '1', name: 'Scuderia Ferrari', price: 105.99, image: './Images/Frames/ShopFrames/special1.avif' },
                { id: '2', name: 'Persol', price: 430.99, image: './Images/Frames/ShopFrames/special2.avif' },
                { id: '3', name: 'Armani Exchange', price: 86.99, image: './Images/Frames/ShopFrames/special3.avif' },
                { id: '4', name: 'Jimmy Choo', price: 295.99, image: './Images/Frames/ShopFrames/special4.avif' },
                { id: '5', name: 'Arnette', price: 93.99, image: './Images/Frames/ShopFrames/special5.avif' },
                { id: '6', name: 'Ray-Ban', price: 180.99, image: './Images/Frames/ShopFrames/special6.avif' },
                { id: '7', name: 'Tory Burch', price: 192.99, image: './Images/Frames/ShopFrames/special7.avif' },
                { id: '8', name: 'Ralph', price: 86.99, image: './Images/Frames/ShopFrames/special8.avif' },
                { id: '9', name: 'Persol', price: 249.99, image: './Images/Frames/ShopFrames/product1.avif' },
                { id: '10', name: 'Scuderia Ferrari', price: 145.99, image: './Images/Frames/ShopFrames/product2.avif' },
                { id: '11', name: 'Armani Exchange', price: 124.99, image: './Images/Frames/ShopFrames/product3.avif' },
                { id: '12', name: 'Coach', price: 206.99, image: './Images/Frames/ShopFrames/product4.avif' },
                { id: '13', name: 'Micheal Kors', price: 175.99, image: './Images/Frames/ShopFrames/product5.avif' },
                { id: '14', name: 'Ray-Ban', price: 175.99, image: './Images/Frames/ShopFrames/product6.avif' },
                { id: '15', name: 'Armani Exchange', price: 131.99, image: './Images/Frames/ShopFrames/product7.avif' },
                { id: '16', name: 'Armani Exchange', price: 124.99, image: './Images/Frames/ShopFrames/product8.avif' },
                { id: '17', name: 'Armani Exchange', price: 131.99, image: './Images/Frames/ShopFrames/product9.avif' },
                { id: '18', name: 'Ray-Ban', price: 178.99, image: './Images/Frames/ShopFrames/product10.avif' },
                { id: '19', name: 'Arnette', price: 93.99, image: './Images/Frames/ShopFrames/product11.avif' },
                { id: '20', name: 'Armani Exchange', price: 124.99, image: './Images/Frames/ShopFrames/product12.avif' },
                { id: '21', name: 'Oakley', price: 215.99, image: './Images/Frames/ShopFrames/product13.avif' },
                { id: '22', name: 'Versace', price: 270.99, image: './Images/Frames/ShopFrames/product14.avif' },
                { id: '23', name: 'Ray-Ban', price: 198.99, image: './Images/Frames/ShopFrames/product15.avif' },
                { id: '24', name: 'Oakley', price: 176.99, image: './Images/Frames/ShopFrames/product16.avif' },
                { id: '25', name: 'Micheal Kors', price: 152.99, image: './Images/Frames/ShopFrames/product17.avif' },
                { id: '26', name: 'Vogue Eyewear', price: 133.99, image: './Images/Frames/ShopFrames/product18.avif' },
                { id: '27', name: 'Micheal Kors', price: 152.99, image: './Images/Frames/ShopFrames/product19.avif' },
                { id: '28', name: 'Emporio Armani', price: 185.99, image: './Images/Frames/ShopFrames/product20.avif' },
                { id: '29', name: 'Ray-Ban', price: 198.99, image: './Images/Frames/ShopFrames/product21.avif' },
                { id: '30', name: 'Ray-Ban', price: 198.99, image: './Images/Frames/ShopFrames/product22.avif' },
                { id: '31', name: 'Vogue Eyewear', price: 121.99, image: './Images/Frames/ShopFrames/product23.avif' },
                { id: '32', name: 'Oakley', price: 176.99, image: './Images/Frames/ShopFrames/product24.avif' },
                { id: '33', name: 'Coach', price: 206.99, image: './Images/Frames/ShopFrames/product25.avif' },
                { id: '34', name: 'Ray-Ban', price: 198.99, image: './Images/Frames/ShopFrames/product26.avif' },
                { id: '35', name: 'Micheal Kors', price: 222.99, image: './Images/Frames/ShopFrames/product27.avif' },
                { id: '36', name: 'Micheal Kors', price: 152.99, image: './Images/Frames/ShopFrames/product28.avif' },
                { id: '37', name: 'Vogue Eyewear', price: 146.99, image: './Images/Frames/ShopFrames/product29.avif' },
                { id: '38', name: 'Versace', price: 270.99, image: './Images/Frames/ShopFrames/product30.avif' },
                { id: '39', name: 'Ralph', price: 148.99, image: './Images/Frames/ShopFrames/product31.avif' },
                { id: '40', name: 'Versace', price: 326.99, image: './Images/Frames/ShopFrames/product32.avif' }
            ];
            return products.find(product => product.id === id);
        }

        const sidebar = document.querySelector('.sidebar');
        const toggleButton = document.querySelector('.sidebar-toggle');
        const logoPart1 = document.querySelector('.logo-part1');
        const originalBackground = 'url(https://coolbackgrounds.io/images/backgrounds/white/white-canyon-6c5d2a4c.jpg)';
        const alternateBackground = 'url(https://t3.ftcdn.net/jpg/01/36/78/52/360_F_136785269_05hcRhonbg4cyLZFApZWemV7oypynXqd.jpg)';
        const originalSidebarWidth = '160px';

        function updateToggleButton() {
            toggleButton.innerHTML = sidebar.classList.contains('closed') ? '>' : '<';
            toggleButton.style.left = sidebar.classList.contains('closed') ? '0px' : originalSidebarWidth;
            logoPart1.style.backgroundImage = sidebar.classList.contains('closed') ? alternateBackground : originalBackground;
        }

        window.toggleSidebar = function() {
            sidebar.classList.toggle('closed');
            updateToggleButton();
        };

        updateToggleButton();

        // Set the flag to indicate that event listeners are initialized
        window.addToCartInitialized = true;
    } else {
        console.log('Add to Cart listeners already initialized');
    }
});
