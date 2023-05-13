let nav = document.querySelector("#nav");
let btnButton = document.querySelector("#btn-button");

btnButton.addEventListener("click", () => {
    btnButton.classList.toggle("active");
    nav.classList.toggle("active");
} )

document.querySelectorAll("#nav-link").forEach(n => n.addEventListener("click", () => {
    btnButton.classList.remove("active");
    nav.classList.remove("active");
}))

