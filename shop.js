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
