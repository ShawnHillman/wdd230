const resultsList = document.getElementById('form-results');
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`${name}: ${value}`);
    resultsList.append(document.createElement('br'));
});