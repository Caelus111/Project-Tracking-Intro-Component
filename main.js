const closeMenu = document.getElementById("close");
const openMenu = document.getElementById("open");
const burgerMenu = document.querySelector(".burger-menu");

openMenu.addEventListener("click", () => {
    burgerMenu.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", (e) => {
    burgerMenu.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
});
