document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Thank you for reaching out! I will get back to you soon.');
  });
  
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });