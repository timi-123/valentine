document.addEventListener('DOMContentLoaded', function () {
    const heartsContainer = document.getElementById('hearts-container');

    for (let i = 0; i < 10; i++) {
        createHeart();
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = Math.random() * 1 + 1 + 's';
        heart.style.animationDelay = Math.random() + 's';

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});
