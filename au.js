function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in, .zoom-in');
    animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.style.animationPlayState = 'running';
        }
    });
}

window.addEventListener('load', handleScrollAnimations);
window.addEventListener('scroll', handleScrollAnimations);

window.addEventListener('scroll', function() {
    var square = document.querySelector('.animated-square');
    var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    var scale = 1 - scrollPercentage;
    square.style.transform = `scale(${Math.max(scale, 0)})`;
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-item a');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
});
