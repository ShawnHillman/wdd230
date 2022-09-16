// sequence selection repeptition

let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);
document.getElementById('full-year').textContent = year;

let lastModDate = document.lastModified;

console.log(lastModDate);

document.querySelector('div').textContent += lastModDate;