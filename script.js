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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fading_right');
            entry.target.classList.remove('fading_left');
        } else {
            entry.target.classList.add('fading_right');
            entry.target.classList.add('fading_left');
        }
    })
});

const fadeElements = document.querySelectorAll('.fading_right, .fading_left');

fadeElements.forEach((element) => {
    observer.observe(element);
});

