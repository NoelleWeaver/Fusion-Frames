document.getElementById('scrollLeft').addEventListener('click', function() {
    document.querySelector('.flex-nowrap').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

document.getElementById('scrollRight').addEventListener('click', function() {
    document.querySelector('.flex-nowrap').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
