/* ==========================================================================
   "Someone just bought..." notification toast.

   IMPORTANT: This currently uses randomly generated demo names + random
   products from the catalog — it is NOT connected to real order data,
   because the site doesn't have a backend/order database yet. Once real
   order storage exists (see the checkout backend discussion), this should
   be swapped to pull from actual recent orders instead of random picks,
   so the notifications reflect genuine activity.
   ========================================================================== */

const DEMO_CUSTOMER_NAMES = [
  "Cody J", "Maddison T", "Liam R", "Chloe W", "Jack B", "Ella S",
  "Noah K", "Ruby M", "Lachlan P", "Ava D", "Ethan C", "Zoe H",
  "Mason G", "Isla F", "Riley N", "Grace L"
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showPurchaseToast() {
  // Don't show while the age gate is still up
  if (document.getElementById("ageGateOverlay")) return;
  if (typeof PRODUCTS === "undefined" || PRODUCTS.length === 0) return;

  const product = randomFrom(PRODUCTS);
  const name = randomFrom(DEMO_CUSTOMER_NAMES);
  const minutesAgo = Math.floor(Math.random() * 40) + 2;

  let toast = document.getElementById("purchaseToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "purchaseToast";
    toast.className = "purchase-toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="purchase-toast-icon">${name.charAt(0)}</div>
    <div>
      <div class="purchase-toast-text"><strong>${name}</strong> just bought<br><strong>${product.name}</strong></div>
      <div class="purchase-toast-time">${minutesAgo} minutes ago</div>
    </div>
  `;

  requestAnimationFrame(() => toast.classList.add("show"));

  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

function scheduleNextPurchaseToast() {
  const delay = 12000 + Math.random() * 13000; // 12–25s between notifications
  setTimeout(() => {
    showPurchaseToast();
    scheduleNextPurchaseToast();
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  // First one appears a little after page load rather than immediately
  setTimeout(() => {
    showPurchaseToast();
    scheduleNextPurchaseToast();
  }, 6000);
});