// sequence selection repeptition

let date = new Date();
console.log(date);

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

console.log(year);
document.getElementById("full-year").textContent = year;

let currentDate = `${month}/${day}/${year}`;
document.getElementById("current").textContent += currentDate;

let lastModDate = document.lastModified;

console.log(lastModDate);

document.getElementById("updated").textContent += lastModDate;