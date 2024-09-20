document.addEventListener('DOMContentLoaded', () => {
  // Animations for different sections on scroll
  const aboutBox = document.querySelector('.about-box');
  const expandingCircle = document.querySelector('.expanding-circle');
  const blogsBox = document.querySelector('.blogs-box');
  
  window.addEventListener('scroll', () => {
      const aboutBoxTop = aboutBox.getBoundingClientRect().top;
      const circleTop = expandingCircle.getBoundingClientRect().top;
      const blogsBoxTop = blogsBox.getBoundingClientRect().top;
      const triggerBottom = window.innerHeight * 0.8;

      // Add or remove 'expanded' class based on scroll position
      if (aboutBoxTop < triggerBottom) {
          aboutBox.classList.add('expanded');
      } else {
          aboutBox.classList.remove('expanded');
      }

      if (circleTop < triggerBottom) {
          expandingCircle.classList.add('expanded');
      } else {
          expandingCircle.classList.remove('expanded');
      }

      if (blogsBoxTop < triggerBottom) {
          blogsBox.classList.add('expanded');
      } else {
          blogsBox.classList.remove('expanded');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');  // Hamburger icon
  const navList = document.querySelector('.nav-list');        // Navigation list
  const navItems = document.querySelectorAll('.nav-item a');  // Individual nav items

  // Toggle the visibility of the navigation menu when the hamburger icon is clicked
  menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');  // Show or hide the nav list
  });

  // Close the navigation list when an item is clicked and redirect to the respective page
  navItems.forEach(item => {
      item.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default anchor link behavior

          // Get the href attribute to determine the target page
          const targetPage = item.getAttribute('href');

          // Redirect to the target page
          window.location.href = targetPage;

          // Close the navigation menu after clicking an item
          navList.classList.remove('active');
      });
  });
});
