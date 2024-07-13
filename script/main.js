let showMenu = document.querySelector("#showMenu");
let menu = document.querySelector(".header .container .links");
showMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
});
console.log(showMenu);
console.log(menu);
