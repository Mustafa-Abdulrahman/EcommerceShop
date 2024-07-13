let container = document.querySelector(".blogs .container");
let containerBoxsOdd = document.querySelectorAll(
  ".blogs .container .box:nth-child(odd)"
);
let containerBoxsEven = document.querySelectorAll(
  ".blogs .container .box:nth-child(even)"
);
console.log(containerBoxsOdd, containerBoxsEven);
window.addEventListener("load", function () {
  containerBoxsOdd.forEach((n) => {
    n.style.transform = "translatex(0)";
    n.style.opacity = "1";
  });
  containerBoxsEven.forEach((n) => {
    n.style.transform = "translatex(0)";
    n.style.opacity = "1";
  });
});
