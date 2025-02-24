const sections = document.querySelectorAll('section[id]');

function scrollTracker() {
    const currentsYScroll = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        const navItem = document.querySelector(`.nav_bar a[href*=${sectionId}]`);
        if (
            currentsYScroll > sectionTop &&
            currentsYScroll <= sectionTop + sectionHeight
        ) {
            navItem.classList.add('active');
        } else {
            navItem.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollTracker);