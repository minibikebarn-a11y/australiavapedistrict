/* ==========================================================================
   Shared site behaviour — nav toggle, newsletter form, footer year
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const expanded = navLinks.classList.contains("open");
      navToggle.setAttribute("aria-expanded", expanded);
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Footer year
  document.querySelectorAll(".footer-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Newsletter form (placeholder — wire to real email service later)
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      const btn = form.querySelector("button");
      if (input && input.value) {
        btn.textContent = "Subscribed";
        input.value = "";
        setTimeout(() => { btn.textContent = "Subscribe"; }, 2500);
      }
    });
  });
});