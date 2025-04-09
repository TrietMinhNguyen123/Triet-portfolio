



document.addEventListener("DOMContentLoaded", function () {
    const myNameInput = document.querySelector('.My_name');
    if (myNameInput) {
        myNameInput.classList.add('zoom-in');
    }
});

const observe_nav = new IntersectionObserver((entries) => {
        if (entry.isIntersecting && window.scrollY === 100) {
            console.log('Display')
            style = "opacity: 1"
        }
});

const sections = document.querySelectorAll('section[id]');

function scrollTracker() {
    const currentsYScroll = window.scrollY;
    // console.log(currentsYScroll);
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

const arrow_left = document.querySelector('.arrow_left');


document.addEventListener("DOMContentLoaded", function () {
    function left_click() {
        const box_location = document.querySelector(".projectbox_location");
        box_location.style.transform = box_location.style.transform + "translateX(30%)";
        console.log('Left click');
    };
    
    function right_click(){
        console.log('Right click');
        const box_location = document.querySelector(".projectbox_location");
        box_location.style.transform = box_location.style.transform + "translateX(-30%)";
    }; 
    
    const left_arrow = document.querySelector(".arrow_left").addEventListener("click", left_click )
    const right_arrow = document.querySelector(".arrow_right").addEventListener("click", right_click)
    console.log(left_arrow, right_arrow)



});


window.addEventListener('scroll', scrollTracker);

