document.addEventListener('DOMContentLoaded', function() {
    const courseSection = document.getElementById('courses');
    const courseNavLinks = document.querySelectorAll('.course-nav a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-item a');

    const courses = {
        'current-courses': [
            { title: 'Navya Nyaya', description: 'Description for Current Course 1', image: 'previous-course1.avif', link: 'navya-nyaya.html' },
            { title: 'Sadhan Panchakam', description: 'Description for Current Course 2', image: 'Previous-course2.jpg', link: 'sadhan-panchakam.html' },
            { title: 'Chatursutri', description: 'Description for Current Course 3', image: 'Previous-course3.avif', link: 'chatursutri.html' }
        ],
        'previous-courses': [
            { title: 'Vedanta Saar', description: 'Description for Previous Course 1', image: 'previous-course1.avif', link: 'vedanta-saar.html' },
            { title: 'Vivek Chudamani', description: 'Description for Previous Course 2', image: 'previous-course2.jpg', link: 'vivek-chudamani.html' },
            { title: 'Previous Course 3', description: 'Description for Previous Course 3', image: 'previous-course3.avif', link: 'previous-course3.html' }
        ],
        'upcoming-courses': [
            { title: 'Vigyan Bhairav', description: 'Description for Upcoming Course 1', image: 'previous-course1.avif', link: 'vigyan-bhairav.html' },
            { title: 'Upcoming Course 2', description: 'Description for Upcoming Course 2', image: 'previous-course2.jpg', link: 'upcoming-course2.html' },
            { title: 'Upcoming Course 3', description: 'Description for Upcoming Course 3', image: 'previous-course3.avif', link: 'upcoming-course3.html' }
        ]
    };

    function createCourseCard(course) {
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
            <img src="${course.image}" alt="${course.title}" class="course-image">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <a href="${course.link}" class="view-now-btn">View Now</a>
        `;
        
        card.addEventListener('click', function() {
            window.location.href = course.link;
        });

        return card;
    }

    function showCourses(courseType) {
        courseSection.innerHTML = '';
        courses[courseType].forEach(course => {
            courseSection.appendChild(createCourseCard(course));
        });
    }

    showCourses('current-courses');

    courseNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const courseType = this.getAttribute('href').substring(1);
            showCourses(courseType);
        });
    });

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
});
