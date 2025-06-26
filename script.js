function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
  new Typed(".section__text__p2", {
    strings: ["Front-End Developer","Backend-End Developer"],
    typeSpeed: 150,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
  });