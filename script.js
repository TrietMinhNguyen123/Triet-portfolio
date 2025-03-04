document.addEventListener("DOMContentLoaded", function () {
    const myNameInput = document.querySelector('.My_name');
    if (myNameInput) {
        myNameInput.classList.add('zoom-in');
    }
});



const sections = document.querySelectorAll('section[id]');

function scrollTracker() {
    const currentsYScroll = window.scrollY;
    console.log(currentsYScroll);
    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        const navItem = document.querySelector(`.nav_bar a[href*=${sectionId}]`);
        if ( currentsYScroll > sectionTop && currentsYScroll <= sectionTop + sectionHeight) {
            navItem.classList.add('active');
        } else {
            navItem.classList.remove('active');
        }
    });
};

const observer_right = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fading_right');
        } else {
            entry.target.classList.add('fading_right');
        }
    })
});
// This is for the right fading effect
const fadeElements_right = document.querySelectorAll('.fading_right');

fadeElements_right.forEach((element) => {
    observer_right.observe(element);
});

// This is for the left fading effect
const observer_left = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fading_left');
        } else {
            entry.target.classList.add('fading_left');
        }
    })
});

const fadeElements_left = document.querySelectorAll('.fading_left');
    fadeElements_left.forEach((element) => {
        observer_left.observe(element);
    });
// This is for the up fading effect
const observer_up = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fading_up');
        } else {
            entry.target.classList.add('fading_up');
        }
    })
});


const fadeElements_up = document.querySelectorAll('.fading_up');

fadeElements_up.forEach((element) => {
    observer_up.observe(element);
});

window.addEventListener('scroll', scrollTracker);
