ScrollReveal().reveal('.reveal', {
    delay: 200,
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    origin: 'bottom',
    reset: false
});
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".conteudo");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 }); // ativa quando 20% do elemento aparece

  boxes.forEach(box => observer.observe(box));
});

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});