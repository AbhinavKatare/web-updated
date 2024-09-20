document.addEventListener('DOMContentLoaded', function() {
    const subNavLinks = document.querySelectorAll('.sub-nav a');
    const sections = document.querySelectorAll('.academy-content section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-item a');

    function highlightNavItem() {
        let scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop - 100) {
                subNavLinks.forEach(link => link.classList.remove('active'));
                subNavLinks[index].classList.add('active');
            }
        });
    }

    subNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', highlightNavItem);

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
});
