// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Log to console (for demo)
        console.log('Form submitted:', data);
        
        // Show success message
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.style.display = 'block';
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you! We\'ll contact you shortly.';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
        
        // Reset form
        this.reset();
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards on scroll
document.querySelectorAll('.feature-card, .testimonial-card, .product-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active class to nav links based on current page
const currentLocation = location.pathname.split('/').pop() || 'index.html';
const menuItems = document.querySelectorAll('.nav-links a');

menuItems.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Play button functionality (for demo)
const videoPlaceholders = document.querySelectorAll('.video-placeholder, .play-button');
videoPlaceholders.forEach(video => {
    if (video.classList.contains('video-placeholder')) {
        video.addEventListener('click', function() {
            alert('Video would play here. Add your YouTube or Vimeo embed link.');
        });
    }
});

// Add scroll event for sticky nav animation
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Form styling message
if (document.getElementById('formMessage')) {
    const style = document.createElement('style');
    style.textContent = `
        .form-message {
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 5px;
            font-weight: bold;
        }
        .form-message.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
    `;
    document.head.appendChild(style);
}

console.log('Versatile Hitch website loaded successfully!');