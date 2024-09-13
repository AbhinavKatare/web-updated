// Combined JavaScript for contact-us.html

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Message sent successfully!');
            this.reset();
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', toggleMenu);
    }

    function toggleMenu() {
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    }

    // Responsive behavior
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileNav.style.display = 'none';
        }
    });

    // Input label animation
    const inputContainers = document.querySelectorAll('.input-container');
    inputContainers.forEach(container => {
        const input = container.querySelector('input, textarea');
        const label = container.querySelector('label');

        input.addEventListener('focus', () => {
            label.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                label.classList.remove('active');
            }
        });
    });
});
