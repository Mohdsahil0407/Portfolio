function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
  new Typed(".typed", {
    strings: ["Front-End Developer","Backend-End Developer","Full Stack Developer"],
    typeSpeed: 150,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
  });
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: .7 // 60% of the card should be visible (centered)
  });

  document.querySelectorAll('.details-container,.section__pic-container').forEach(card => {
    observer.observe(card);
  });

