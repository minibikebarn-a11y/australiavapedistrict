/* ==========================================================================
   Theme toggle — dark (default) / light, remembered per browser
   ========================================================================== */

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function updateThemeIcon() {
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.textContent = currentTheme() === "light" ? "🌙" : "☀️";
    btn.setAttribute("aria-label", currentTheme() === "light" ? "Switch to dark mode" : "Switch to light mode");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateThemeIcon();
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const next = currentTheme() === "light" ? "dark" : "light";
      if (next === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      try { localStorage.setItem("avd_theme", next); } catch (e) {}
      updateThemeIcon();
    });
  });
});