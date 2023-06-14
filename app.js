const sections = document.querySelectorAll('section');
const active = document.querySelector('.active')


// const trans = document.querySelector('.trans');
// const gradients = ['coral', 'chartreuse', 'chocolate', 'cadetblue'];



const options = {
    threshold: 0.7,
}

let observer = new IntersectionObserver(navScroll, options);

function navScroll(entries) { 
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeLink = document.querySelector(`[data-page="${className}"]`)
        if (entry.isIntersecting) {
            activeLink.classList.add('active')
        } else {
            activeLink.classList.remove('active')
        }
        // console.log(entry);
        // const elementIndex = entry.target.getAttribute('data-index');
        // const coordinates = activeLink.getBoundingClientRect();
        // const directions = {
        //     height: coordinates.height,
        //     width: coordinates.width,
        //     top: coordinates.top,
        //     left: coordinates.left,
        // }

        // if (entry.isIntersecting) {
        //     trans.style.setProperty('height', `${directions.height}px`)
        //     trans.style.setProperty('width', `${directions.width}px`)
        //     trans.style.setProperty('top', `${directions.top}px`)
        //     trans.style.setProperty('left', `${directions.left}px`)
        //     trans.style.backgroundColor = gradients[elementIndex];
        // }
    });
}

sections.forEach((section) => {
    observer.observe(section);
})