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