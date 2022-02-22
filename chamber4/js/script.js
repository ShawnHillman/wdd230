// const today = new Date();

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const currentDay = 


// const displayDate = document.querySelector("#header-date");
// const displayMod = document.querySelector('#lastmod');

// const today = new Date();
// const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);

// displayDate.innerHTML = `${fulldate}`;
// displayMod.innerHTML = document.lastModified;

// if (today.getDay !== 1 && today.getDay !== 2) {
//     document.getElementById('m-banners').style.display = "none";
//     document.getElementsByTagName('main').style.gridTemplateRows = "0px 300px 300px 300px";
// }

// // Windchill Calculation

// console.log("test");

// var temp = 33;
// var speed = 2.5;
// var windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16));

// console.log(temp);
// console.log(speed);
// console.log(windChill);

// var windChill = Math.round(windChill);
// document.getElementById("chill-num").innerHTML = windChill;


// Lazy Image Loading

const images = document.querySelectorAll("[data-src]");

function preloadImg(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: .3,
    rootMargin: "0px 0px 300px 0px"
};


const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadeImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})