
  const menu = document.querySelector('.menu-links');
  const hamburger = document.querySelector('.hamburger-icon');

  function toggleMenu() {
    menu.classList.toggle("open");
    hamburger.classList.toggle("open");
  }

  // Close menu if click happens outside
  document.addEventListener('click', function (event) {
    const isClickInside = menu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInside) {
      menu.classList.remove("open");
      hamburger.classList.remove("open");
    }
  });


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

 const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scroll-progress").style.width = scrollPercent + "%";
});








