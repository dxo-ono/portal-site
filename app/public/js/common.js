//ハンバーガーメニュー開閉動作
const hamburger = document.getElementById("hamburger-btn");
const nav = document.getElementById("header-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});