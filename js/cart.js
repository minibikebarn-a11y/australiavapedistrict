/* ==========================================================================
   Cart logic — localStorage-based cart shared across all pages.
   Requires products.js to be loaded first.

   Cart entries: { id, option (string|null), qty }
   `option` is the chosen flavor/colour/strength/pack-size label, or null
   for products with no selectable options. Two entries with the same
   product id but different `option` are separate lines.
   ========================================================================== */

const CART_KEY = "avd_cart";
const MIN_ORDER_TOTAL = 200; // AUD — minimum before checkout can be placed

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCountBadge();
}

function addToCart(productId, qty = 1, option = null) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId && item.option === option);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, option, qty });
  }
  saveCart(cart);
}

function removeFromCart(productId, option = null) {
  const cart = getCart().filter(item => !(item.id === productId && item.option === option));
  saveCart(cart);
}

function updateCartQty(productId, option, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.option === option);
  if (!item) return;
  if (qty <= 0) {
    removeFromCart(productId, option);
    return;
  }
  item.qty = qty;
  saveCart(cart);
}

/* Returns array of { product, option, qty, unitPrice, lineTotal } for items still in the catalog */
function getCartDetails() {
  return getCart()
    .map(item => {
      const product = getProductById(item.id);
      if (!product) return null;
      const unitPrice = priceForOption(product, item.option);
      return {
        product,
        option: item.option,
        qty: item.qty,
        unitPrice,
        lineTotal: unitPrice * item.qty
      };
    })
    .filter(Boolean);
}

function getCartSubtotal() {
  return getCartDetails().reduce((sum, line) => sum + line.lineTotal, 0);
}

function getCartItemCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCountBadge() {
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = getCartItemCount();
  });
}

document.addEventListener("DOMContentLoaded", updateCartCountBadge);