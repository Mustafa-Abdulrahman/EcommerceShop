let products = document.querySelector(".products");
let productsBox = document.querySelectorAll(".products .container");
let productsBoxs = document.querySelectorAll(".products .container .box");
let buttons = document.querySelector(".productList");
let buttonsBtn = document.querySelectorAll(".productList li");

buttonsBtn.forEach(function (n) {
  n.addEventListener("click", function () {
    // -------------------
    productsBoxs.forEach(function (n) {
      n.style.transform = "translatey(-20px)";
      n.style.opacity = "0.7";
    });
    //------------------
    let target = n.getAttribute("box-target");
    for (let i = 0; i < productsBox.length; i++) {
      productsBox[i].classList.remove("active");
    }
    for (let i = 0; i < buttonsBtn.length; i++) {
      buttonsBtn[i].classList.remove("active");
    }
    n.classList.add("active");
    productsBox[parseInt(target)].classList.add("active");

    let i;
    if (target == 2) {
      i = 6;
    } else {
      i = 0;
    }
    let timer = setInterval(function () {
      productsBoxs[i].style.transform = "translatey(0)";
      productsBoxs[i].style.opacity = "1";
      i++;
      if (i == productsBoxs.length) {
        clearInterval(timer);
      }
    }, 10);
  });
});

// ------------- over lay
let overLay = document.querySelector(".overlay");
let closeOverLay = document.querySelector(".overlay .close");
let mainImg = document.querySelector(".overlay .box .mainImg");
let subImg = document.querySelectorAll(".overlay .box .subImg img");
let mainTitle = document.querySelector(".overlay .box h3");
let price = document.querySelector(".overlay .box .pprice");
let Desc = document.querySelector(".overlay .box p");

subImg.forEach(function (n) {
  n.addEventListener("click", function () {
    let target = n.getAttribute("src");
    mainImg.src = target;
  });
});
closeOverLay.addEventListener("click", function () {
  overLay.style.display = "none";
});
productsBoxs.forEach(function (n) {
  n.addEventListener("click", function () {
    let title = n.querySelector(".text h3").innerHTML;
    let priceEqual = n.querySelector(".price strong").innerHTML;
    let itsImg = n.querySelector(".imgBox img").src;

    mainImg.src = itsImg;
    price.innerHTML = priceEqual;
    mainTitle.innerHTML = title;

    overLay.style.display = "block";
  });
});
