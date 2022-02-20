// const today = new Date();

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const currentDay = 


const displayDate = document.querySelector("#header-date");
const displayMod = document.querySelector('#lastmod');

const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);

displayDate.innerHTML = `${fulldate}`;
displayMod.innerHTML = document.lastModified;

if (today.getDay !== 1 && today.getDay !== 2) {
    document.getElementById('m-banners').style.display = "none";
    document.getElementsByTagName('main').style.gridTemplateRows = "0px 300px 300px 300px";
}