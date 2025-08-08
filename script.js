let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['AI Developer passionately building intelligent systems that redefine what\'s possible','graduate student at UConn School of Business translating cutting-edge AI into measurable real-world impact','Machine Learning Engineer experienced in Deep Learning, GenAI, and Data Science'],
    typeSpeed:80,
    backSpeed:30,
    backDelay:1000,
    loop:true
});
// Get the visitor count element
// Get the visitor count element
const visitorCountElement = document.getElementById('visitor-count');

// Function to get the visitor count from localStorage
function getVisitorCount() {
  return parseInt(localStorage.getItem('visitorCount')) || 0;
}

// Function to update the visitor count in localStorage and the DOM
function updateVisitorCount() {
  const count = getVisitorCount() + 1;
  localStorage.setItem('visitorCount', count);
  visitorCountElement.textContent = count;
}

// Call the updateVisitorCount function when the page loads
window.onload = updateVisitorCount;

// Simple Chat Functions
function openChatModal() {
    const modal = document.getElementById('chatModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeChatModal(event) {
    const modal = document.getElementById('chatModal');
    if (modal && (!event || event.target === modal || event.target.tagName === 'SPAN')) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeChatModal();
    }
});

// Skills Grid Animation Enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Add intersection observer for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    skillCards.forEach(card => {
        observer.observe(card);
    });
    
    // Experience Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Project Category Filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    card.classList.add('show');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('show');
                }
            });
        });
    });
    
    // Project Cards Animation
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        projectObserver.observe(card);
    });
});

// ===== Single Testimonial Display =====
// Carousel functionality disabled - displaying single testimonial by Dwiz Kumar
// Functions kept for future expansion when more testimonials are added

function changeTestimonial(n) {
    // Disabled for single testimonial display
    console.log('Carousel disabled - single testimonial mode');
}

function currentTestimonialSlide(n) {
    // Disabled for single testimonial display
    console.log('Carousel disabled - single testimonial mode');
}

// ===== Enhanced Contact Form =====
const contactForm = document.querySelector('.contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('span');
        const btnIcon = submitBtn.querySelector('i');
        
        // Update button state
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        btnIcon.className = 'bx bx-loader-alt bx-spin';
        
        try {
            // Here you would typically send the form data to your backend
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showFormStatus('success', 'Message sent successfully! I\'ll get back to you within 24 hours.');
            contactForm.reset();
            
        } catch (error) {
            // Show error message
            showFormStatus('error', 'Something went wrong. Please try again or send an email directly.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
            btnIcon.className = 'bx bx-send';
        }
    });
}

function showFormStatus(type, message) {
    if (formStatus) {
        formStatus.className = `form-status ${type}`;
        formStatus.textContent = message;
        formStatus.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}

// ===== Form Validation Enhancement =====
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        validateField(this);
    });
    
    input.addEventListener('input', function() {
        // Remove error styling on input
        this.style.borderColor = '';
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
        }
    }
    
    // Phone validation (basic)
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
        }
    }
    
    // Visual feedback
    if (!isValid) {
        field.style.borderColor = '#ff6b6b';
    } else {
        field.style.borderColor = 'var(--main-color)';
    }
    
    return isValid;
}

// ===== Smooth Animations for Contact Cards =====
const contactCards = document.querySelectorAll('.contact-card, .social-card');

contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ===== Interactive Social Cards =====
const socialCards = document.querySelectorAll('.social-card');

socialCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(0, 238, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = (e.clientX - this.offsetLeft) + 'px';
        ripple.style.top = (e.clientY - this.offsetTop) + 'px';
        ripple.style.width = ripple.style.height = '20px';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);