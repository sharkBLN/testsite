window.addEventListener('DOMContentLoaded', () => {
  // Enhanced scroll behavior for header
  const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Enhanced fade-in sections with better timing
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  sections.forEach(sec => observer.observe(sec));

  // Enhanced modal logic
  const modal = document.getElementById('jobsModal');
  const openBtn = document.querySelector('.jobs-button');
  const closeBtn = document.querySelector('.close');
  
  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Enhanced form handling
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = form.querySelector('button');
      const originalText = button.textContent;
      
      button.textContent = 'Wird gesendet...';
      button.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        button.textContent = 'Gesendet! ✓';
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          form.reset();
        }, 2000);
      }, 1000);
    });
  }
});