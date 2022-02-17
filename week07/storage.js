let body = document.querySelector("body");

// let choice = localStorage.setItem('bgcolor', 'ccc');

// body.style.backgroundColor = choice;

// var body = docuemnt.querySelector('body');

// localStorage.setItem('bgcolor', '0000FF');

// var currentColor = localStorage.getItem('bgcolor');

// body.style.backgroundColor = '#' + currentColor;

var bgcolorForm = document.getElementById('bgcolor');

function changeColor() {
    if(!localStorage.getItem('bgcolor')) {
        populateStorage();
    } else {
        setStyles();
    }
}

function populateStorage() {
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);

    setStyles();
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');

    document.getElementById('bgcolor').value = currentColor;

    body.style.backgroundColor = '#' + currentColor;
}

bgcolorForm.addEventListener = ('change', changeColor);