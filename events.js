document.addEventListener('DOMContentLoaded', function() {
    const eventList = document.getElementById('eventList');
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-item a');

    const events = [
        {
            title: 'lorem ipsum dot',
            date: 'September 15, 2023',
            location: 'City, India',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            image: 'previous-course1.avif'
        },
        {
            title: ' Maxime sunt alias dignissimos.',
            date: 'October 5-7, 2023',
            location: 'Community Center, India',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt alias dignissimos..',
            image: 'previous-course2.jpg'
        },
        {
            title: ' sunt alias dignissimos.',
            date: 'November 18-19, 2023',
            location: 'Tech Hub, India',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt alias dignissimos.',
            image: 'Previous-course3.avif'
        }
    ];

    function createEventCard(event) {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-details">
                <h2 class="event-title">${event.title}</h2>
                <p class="event-date">${event.date}</p>
                <p class="event-location">${event.location}</p>
                <p class="event-description">${event.description}</p>
                <a href="#" class="register-btn">Register Now</a>
            </div>
        `;
        return eventItem;
    }

    function displayEvents() {
        events.forEach((event, index) => {
            const eventCard = createEventCard(event);
            eventCard.style.animationDelay = `${index * 0.2}s`;
            eventList.appendChild(eventCard);
        });
    }

    displayEvents();

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
});
