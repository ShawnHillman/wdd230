const images = document.querySelectorAll('img');

const options = { threshold: [.5] }

function preloadImage (img) {
    const source = img.getAttribute('data-src');
    img.src = source;
}

const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry =>  {
            // console.log(entries);
            if(entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target)  // call a function, send in image that's currently intersecting
                io.unobserve(entry.target); // stop observing it
            }
        })
    }, options);

images.forEach(image => {
    io.observe(image);
})