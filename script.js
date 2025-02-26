const sections = document.querySelectorAll('section[id]');

function scrollTracker() {
    const currentsYScroll = window.scrollY;
    console.log(currentsYScroll);

    // Track scroll position and toggle fading effect
    if (currentsYScroll > 430 && currentsYScroll <= 900) {
        // Between 430 and 1000px, remove fading classes
        console.log("Review image");

        Aboutme_elementsLeft = document.querySelectorAll('.fading_left');
        Aboutme_elementsRight = document.querySelectorAll('.fading_right');

        console.log(Aboutme_elementsLeft);
        console.log(Aboutme_elementsRight);

        Aboutme_elementsLeft.forEach(element => {
            element.classList.remove('fading_left');
        });
        Aboutme_elementsRight.forEach(element => {
            element.classList.remove('fading_right');
        });
    } else if (currentsYScroll > 900 || currentsYScroll <= 430) {
        console.log("heloooo");
        // If the scroll is past 1000px or back below 430px, reapply fading classes
            Aboutme_elementsLeft.forEach(element => {
                element.classList.add('fading_left');
            });
            Aboutme_elementsRight.forEach(element => {
                element.classList.add('fading_right');
            });
    }

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

window.addEventListener('scroll', scrollTracker);