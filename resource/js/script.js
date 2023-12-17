// modal

const modal = document.getElementById("modal");
const open = document.getElementById("open");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay");

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "flex";
    overlay.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// theme

function toggleTheme() {
    var element = document.body;
    element.classList.toggle("darkMode");
}
