const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => navMenu.classList.add("show"));
navClose.addEventListener("click", () => navMenu.classList.remove("show"));

document.querySelectorAll(".nav-link, .nav-contact").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("show"));
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 30);

  document.querySelectorAll("section[id]").forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link && top >= offset && top < offset + height) {
      document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

new Typed("#typed", {
  strings: ["Web", "Full Stack", "Mobile"],
  typeSpeed: 90,
  backSpeed: 60,
  backDelay: 1400,
  loop: true
});

new Swiper(".project-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: { el: ".project-slider .swiper-pagination", clickable: true },
  breakpoints: {
    700: { slidesPerView: 2 },
    1000: { slidesPerView: 3 }
  }
});

new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: { el: ".testimonial-slider .swiper-pagination", clickable: true }
});

ScrollReveal().reveal(".reveal", {
  distance: "35px",
  duration: 900,
  interval: 80,
  origin: "bottom",
  reset: false
});

document.getElementById("ano").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", event => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const texto = document.getElementById("mensagem").value;

  const corpo = `Olá Juliano,%0D%0A%0D%0ANome: ${encodeURIComponent(nome)}%0D%0AE-mail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(texto)}`;
  window.location.href = `mailto:juliano@email.com?subject=${encodeURIComponent(assunto)}&body=${corpo}`;

  message.textContent = "Abrindo seu aplicativo de e-mail...";
});
