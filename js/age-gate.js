/* ==========================================================================
   Age verification gate — shown once per browser until confirmed.
   This script is loaded as the very first thing inside <body> on every
   page, so it can inject the overlay before any real content is visible.

   It also tells the Tawk.to chat widget (on pages that have it) to stay
   hidden until the age is confirmed. This matters because Tawk renders its
   bubble with a very high z-index and adds it to the page after our
   overlay, so relying on z-index alone isn't enough to keep it hidden —
   we have to use Tawk's own hideWidget()/showWidget() API instead.
   ========================================================================== */

(function () {
  var VERIFIED_KEY = "avd_age_verified";

  function isVerified() {
    try {
      return localStorage.getItem(VERIFIED_KEY) === "true";
    } catch (e) {
      return true; // localStorage unavailable — fail open rather than blocking the site
    }
  }

  // Register this before Tawk's own script runs, so it's ready the moment
  // Tawk finishes loading — Tawk_API.onLoad is their supported hook for this.
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_API.onLoad = function () {
    if (!isVerified() && window.Tawk_API.hideWidget) {
      window.Tawk_API.hideWidget();
    }
  };

  if (isVerified()) return;

  var overlay = document.createElement("div");
  overlay.id = "ageGateOverlay";
  overlay.innerHTML =
    '<div class="age-gate-box">' +
      '<div class="age-gate-brand">australiavapedistrict</div>' +
      '<h1 class="age-gate-heading">Are you 21 or older?</h1>' +
      '<p class="age-gate-text">This website features vaping products intended for adults of legal smoking age only. Please confirm your age to continue.</p>' +
      '<div class="age-gate-actions">' +
        '<button type="button" id="ageGateYes" class="age-gate-btn age-gate-btn-solid">Yes, I\'m 21 or older</button>' +
        '<button type="button" id="ageGateNo" class="age-gate-btn">No, I\'m under 21</button>' +
      '</div>' +
    '</div>';

  document.documentElement.classList.add("age-gate-locked");
  document.body.insertAdjacentElement("afterbegin", overlay);

  document.getElementById("ageGateYes").addEventListener("click", function () {
    try { localStorage.setItem(VERIFIED_KEY, "true"); } catch (e) {}
    document.documentElement.classList.remove("age-gate-locked");
    overlay.remove();
    if (window.Tawk_API && window.Tawk_API.showWidget) {
      window.Tawk_API.showWidget();
    }
  });

  document.getElementById("ageGateNo").addEventListener("click", function () {
    document.querySelector(".age-gate-box").innerHTML =
      '<div class="age-gate-brand">australiavapedistrict</div>' +
      '<p class="age-gate-text">Sorry, you must be 21 or older to access this website.</p>';
  });
})();