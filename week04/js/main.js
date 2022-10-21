function viewNav() {
    let nav = document.querySelector("#navigation");
    nav.classList.toggle("up");
    let content = document.querySelector("main");
    content.classList.toggle("up");
    let footer = document.querySelector("footer");
    footer.classList.toggle("up");
}