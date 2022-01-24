function alertUser() {
    alert("Hello User!");
    document.getElementById("btn2").style.display="block";

}

const button = document.querySelector('#btn');
button.addEventListener('click',alertUser);

const button2 = document.querySelectorAll('#btn2');
button2.addEventListener('click', () => {button2.classList.add('big-button')});