document.addEventListener('DOMContentLoaded', () => {
    const aboutBox = document.querySelector('.about-box');
    const expandingCircle = document.querySelector('.expanding-circle');
    const blogsBox = document.querySelector('.blogs-box');
    
    window.addEventListener('scroll', () => {
      const aboutBoxTop = aboutBox.getBoundingClientRect().top;
      const circleTop = expandingCircle.getBoundingClientRect().top;
      const blogsBoxTop = blogsBox.getBoundingClientRect().top;
      const triggerBottom = window.innerHeight * 0.8;
      
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
  
