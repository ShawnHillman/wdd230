
window.onload = function() {
    getTodaysDate();
}

function getTodaysDate() {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('lastModified').textContent = document.lastModified;
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}