document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.getElementById('blogGrid');
    const blogPosts = [
        {
            title: 'The Importance of Meditation in Daily Life',
            excerpt: 'Discover how incorporating meditation into your daily routine can improve your overall well-being and productivity.',
            image: 'blogs1.avif'
        },
        {
            title: 'Understanding the Principles of Karma',
            excerpt: 'Explore the concept of karma and how it influences our actions and experiences in life.',
            image: 'blog2.avif'
        },
        {
            title: 'The Power of Positive Thinking',
            excerpt: 'Learn how cultivating a positive mindset can transform your life and help you overcome challenges.',
            image: 'blogs3.avif'
        },
        {
            title: 'Exploring Ancient Indian Philosophy',
            excerpt: 'Delve into the rich traditions of Indian philosophy and their relevance in the modern world.',
            image: 'blog4.jpg'
        }
    ];

    function createBlogCard(post) {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more-btn">Read More</a>
            </div>
        `;
        return blogCard;
    }

    function displayBlogPosts() {
        blogPosts.forEach(post => {
            const blogCard = createBlogCard(post);
            blogGrid.appendChild(blogCard);
        });
    }

    displayBlogPosts();
});
