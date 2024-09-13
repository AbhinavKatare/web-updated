// Handle form switching between Login and Sign Up
document.getElementById('signup-tab').addEventListener('click', function() {
    document.getElementById('login-form').classList.remove('active-form');
    document.getElementById('signup-form').classList.add('active-form');
    document.querySelector('.login-btn').classList.remove('active');
    document.querySelector('.signup-btn').classList.add('active');
});

document.getElementById('login-tab').addEventListener('click', function() {
    document.getElementById('signup-form').classList.remove('active-form');
    document.getElementById('login-form').classList.add('active-form');
    document.querySelector('.signup-btn').classList.remove('active');
    document.querySelector('.login-btn').classList.add('active');
});

// Handle "Already have an account?" or "Don't have an account?" links
document.getElementById('switch-to-signup').addEventListener('click', function() {
    document.getElementById('login-tab').click();
});

document.getElementById('switch-to-login').addEventListener('click', function() {
    document.getElementById('signup-tab').click();
});

// Show/hide password functionality
document.querySelectorAll('.show-password').forEach(item => {
    item.addEventListener('click', function() {
        const passwordField = this.previousElementSibling;
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
    });
});
