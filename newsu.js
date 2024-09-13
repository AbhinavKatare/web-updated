document.addEventListener('DOMContentLoaded', function() {
    const newsGrid = document.getElementById('newsGrid');
    const newsItems = [
        {
            title: 'Pragya Trust Launches New Educational Program',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'news1.jpg'
        },
        {
            title: 'lorem-ipsum dolor sit amet',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'news2.jpg'
        },
        {
            title: 'Lorem-ipsum enem ad minim veniam',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            image: 'news3.jpg'
        },
        {
            title: 'Lorem-ipsum excepteur sint occaecat',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: 'news4.jpg'
        }
    ];

    function createNewsItem(item) {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="news-item-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="#" class="read-more-btn">Read More</a>
            </div>
        `;
        return newsItem;
    }

    function displayNewsItems() {
        newsItems.forEach(item => {
            const newsItem = createNewsItem(item);
            newsGrid.appendChild(newsItem);
        });
    }

    displayNewsItems();
});
