const showMenu = document.querySelector(".toggle"),
  menuNav = document.querySelector(".menu_nav"),
  navbar = document.querySelector(".navbar"),
  items = document.querySelectorAll(".item");
showMenu.addEventListener("click", function () {
  let e = navbar.getAttribute("data-expanded");
  "false" == e
    ? (menuNav.setAttribute("data-show", !0),
      navbar.setAttribute("data-expanded", !0))
    : (menuNav.setAttribute("data-show", !1),
      navbar.setAttribute("data-expanded", !1));
}),
  items.forEach(e => {
    e.addEventListener("click", e => {
      "true" === navbar.getAttribute("data-expanded") &&
        (menuNav.setAttribute("data-show", !1),
        navbar.setAttribute("data-expanded", !1));
    });
  }),
  document.querySelector("main").addEventListener("click", e => {
    menuNav.setAttribute("data-show", !1),
      navbar.setAttribute("data-expanded", !1);
  });
const scrolldown = document.querySelector(".scrolldown");
if (scrolldown) {
  let e = document.querySelector("#dos").offsetTop;
  function t(t) {
    t.preventDefault(), scroll({ top: e, behavior: "smooth" });
  }
  scrolldown.addEventListener("click", t);
}
(window.onscroll = function () {
  document.documentElement.scrollTop > 700
    ? document.querySelector(".arrow_top").classList.add("show_arrow")
    : document.querySelector(".arrow_top").classList.remove("show_arrow");
}),
  document.querySelector(".arrow_top").addEventListener("click", e => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    !1
  );

const sliderBox = document.querySelector(".slider_container");
let slider = document.querySelectorAll(".slider");

function moveSlider() {
  let sliderFirst = document.querySelectorAll(".slider")[0];

  sliderBox.style.margingLeft = "-200%";
  sliderBox.style.transition = "width .7s ease-in";

  setTimeout(function () {
    sliderBox.style.transition = "none";
    sliderBox.insertAdjacentElement("beforeend", sliderFirst);
    sliderBox.style.margingLeft = "-100%";
  }, 700);
}

if (sliderBox) {
  setInterval(function () {
    moveSlider();
  }, 9000);
}

const homeShowImgs = document.querySelectorAll(".show_demo > img"),
  hleft = document.querySelector(".controls_home > .ctrlh_left"),
  hright = document.querySelector(".controls_home > .ctrlh_right"),
  homeGallery = document.querySelector(".home_gallery"),
  homeClose = document.querySelector(".ctrlh_close");
let homeImg = document.querySelector(".hg_img");
const homeImgs = [
  ["assets/img/sect4img1.webp"],
  ["assets/img/sect4img2.webp"],
  ["assets/img/sect4img3.webp"],
  ["assets/img/sect4img4.webp"],
  ["assets/img/sect4img5.webp"],
  ["assets/img/sect4img6.webp"],
];
function homeMoveLeft() {
  let e = homeImg.getAttribute("src");
  "assets/img/sect4img1.webp" == e
    ? homeImg.setAttribute("src", homeImgs[5])
    : "assets/img/sect4img6.webp" == e
    ? homeImg.setAttribute("src", homeImgs[4])
    : "assets/img/sect4img5.webp" == e
    ? homeImg.setAttribute("src", homeImgs[3])
    : "assets/img/sect4img4.webp" == e
    ? homeImg.setAttribute("src", homeImgs[2])
    : "assets/img/sect4img3.webp" == e
    ? homeImg.setAttribute("src", homeImgs[1])
    : homeImg.setAttribute("src", homeImgs[0]);
}
function homeMoveRight() {
  let e = homeImg.getAttribute("src");
  "assets/img/sect4img6.webp" == e
    ? homeImg.setAttribute("src", homeImgs[0])
    : "assets/img/sect4img1.webp" == e
    ? homeImg.setAttribute("src", homeImgs[1])
    : "assets/img/sect4img2.webp" == e
    ? homeImg.setAttribute("src", homeImgs[2])
    : "assets/img/sect4img3.webp" == e
    ? homeImg.setAttribute("src", homeImgs[3])
    : "assets/img/sect4img4.webp" == e
    ? homeImg.setAttribute("src", homeImgs[4])
    : homeImg.setAttribute("src", homeImgs[5]);
}
hright &&
  (hleft.addEventListener("click", homeMoveLeft),
  hright.addEventListener("click", homeMoveRight),
  homeShowImgs.forEach(e => {
    e.addEventListener("click", e => {
      homeGallery.classList.add("home_gallery_show");
    });
  }),
  homeClose.addEventListener("click", e => {
    homeGallery.classList.remove("home_gallery_show");
  }));
const imgsButton = document.querySelectorAll(".demo01_imgs > div > img"),
  leftBtn = document.querySelector(".controls > .ctrl01_left"),
  rightBtn = document.querySelector(".controls > .ctrl01_right"),
  gallSlider = document.querySelector(".demo01_slider");
let img = document.querySelector(".demo01_slimg");
const imgShow = [
  ["../assets/img/demo01_01.webp"],
  ["../assets/img/demo01_02.webp"],
  ["../assets/img/demo01_03.webp"],
  ["../assets/img/demo01_04.webp"],
  ["../assets/img/demo01_05.webp"],
];
function leftMove() {
  let e = img.getAttribute("src");
  "../assets/img/demo01_01.webp" == e
    ? img.setAttribute("src", imgShow[4])
    : "../assets/img/demo01_05.webp" == e
    ? img.setAttribute("src", imgShow[3])
    : "../assets/img/demo01_04.webp" == e
    ? img.setAttribute("src", imgShow[2])
    : "../assets/img/demo01_03.webp" == e
    ? img.setAttribute("src", imgShow[1])
    : img.setAttribute("src", imgShow[0]);
}
function rightMove() {
  let e = img.getAttribute("src");
  "../assets/img/demo01_05.webp" == e
    ? img.setAttribute("src", imgShow[0])
    : "../assets/img/demo01_01.webp" == e
    ? img.setAttribute("src", imgShow[1])
    : "../assets/img/demo01_02.webp" == e
    ? img.setAttribute("src", imgShow[2])
    : "../assets/img/demo01_03.webp" === e
    ? img.setAttribute("src", imgShow[3])
    : img.setAttribute("src", imgShow[4]);
}
if (rightBtn) {
  leftBtn.addEventListener("click", leftMove),
    rightBtn.addEventListener("click", rightMove),
    imgsButton.forEach(e => {
      e.addEventListener("click", e => {
        gallSlider.classList.add("demo01_show");
      });
    });
  let s = document.querySelector(".ctrl01_close");
  s.addEventListener("click", e => {
    gallSlider.classList.remove("demo01_show");
  });
}
const imgs02Button = document.querySelectorAll(".demo02_imgs > div > img"),
  left02Btn = document.querySelector(".controls02 > .ctrl02_left"),
  right02Btn = document.querySelector(".controls02 > .ctrl02_right"),
  gallSlider02 = document.querySelector(".demo02_slider");
let imgtwo = document.querySelector(".demo02_slimg");
const imgShowtwo = [
  ["../assets/img/demo02_01.webp"],
  ["../assets/img/demo02_02.webp"],
  ["../assets/img/demo02_03.webp"],
  ["../assets/img/demo02_04.webp"],
  ["../assets/img/demo02_05.webp"],
];
function leftMovetwo() {
  let e = imgtwo.getAttribute("src");
  "../assets/img/demo02_01.webp" == e
    ? imgtwo.setAttribute("src", imgShowtwo[4])
    : "../assets/img/demo02_05.webp" == e
    ? imgtwo.setAttribute("src", imgShowtwo[3])
    : "../assets/img/demo02_04.webp" == e
    ? imgtwo.setAttribute("src", imgShowtwo[2])
    : "../assets/img/demo02_03.webp" == e
    ? imgtwo.setAttribute("src", imgShowtwo[1])
    : imgtwo.setAttribute("src", imgShowtwo[0]);
}
function rightMovetwo() {
  let e = imgtwo.getAttribute("src");
  "../assets/img/demo02_05.webp" == e
    ? imgtwo.setAttribute("src", imgShowtwo[0])
    : "../assets/img/demo02_01.webp" == e
    ? imgtwo.setAttribute("src", imgShowtwo[1])
    : "../assets/img/demo02_02.webp" == e
    ? imgtwo.setAttribute("src", imgShowtwo[2])
    : "../assets/img/demo02_03.webp" === e
    ? imgtwo.setAttribute("src", imgShowtwo[3])
    : imgtwo.setAttribute("src", imgShowtwo[4]);
}
if (right02Btn) {
  left02Btn.addEventListener("click", leftMovetwo),
    right02Btn.addEventListener("click", rightMovetwo),
    imgs02Button.forEach(e => {
      e.addEventListener("click", e => {
        gallSlider02.classList.add("demo02_show");
      });
    });
  let o = document.querySelector(".ctrl02_close");
  o.addEventListener("click", e => {
    gallSlider02.classList.remove("demo02_show");
  });
}
