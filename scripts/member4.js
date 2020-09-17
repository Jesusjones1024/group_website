const educationBtn = document.getElementById("education-button");
const workBtn = document.getElementById("work-button");
const gifBtn = document.getElementById("for-fun-button");

const educationShow = document.getElementById("education-show");
const workShow = document.getElementById("work-show");
const gifShow = document.getElementById("for-fun-show");

educationBtn.onclick = function (event) {
  event.preventDefault();

  educationShow.style.display = "block";
  workShow.style.display = "none";
  gifShow.style.display = "none";

  this.classList.add("about-nav-link-active");
  workBtn.classList.remove("about-nav-link-active");
  gifBtn.classList.remove("about-nav-link-active");
};

workBtn.onclick = function (event) {
  event.preventDefault();

  educationShow.style.display = "none";
  workShow.style.display = "block";
  gifShow.style.display = "none";

  educationBtn.classList.remove("about-nav-link-active");
  this.classList.add("about-nav-link-active");
  gifBtn.classList.remove("about-nav-link-active");
};

gifBtn.onclick = function (event) {
  event.preventDefault();

  educationShow.style.display = "none";
  workShow.style.display = "none";
  gifShow.style.display = "block";

  educationBtn.classList.remove("about-nav-link-active");
  workBtn.classList.remove("about-nav-link-active");
  this.classList.add("about-nav-link-active");
};
