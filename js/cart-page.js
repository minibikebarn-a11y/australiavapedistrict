/* ==========================================================================
   Cart page — render line items, handle qty/remove, show subtotal + min-order note
   ========================================================================== */

function renderCartPage() {
  const lines = getCartDetails();
  const linesEl = document.getElementById("cartLines");
  const layout = document.getElementById("cartLayout");
  const emptyEl = document.getElementById("cartEmpty");

  if (lines.length === 0) {
    layout.style.display = "none";
    emptyEl.style.display = "block";
    return;
  }
  layout.style.display = "grid";
  emptyEl.style.display = "none";

  linesEl.innerHTML = lines.map((line, i) => `
    <div class="cart-line" data-index="${i}" data-id="${line.product.id}" data-option="${line.option || ""}">
      <div class="cart-line-media"><img src="${line.product.image}" alt="${line.product.name}" ${IMG_FALLBACK}></div>
      <div>
        <div class="cart-line-name">${line.product.name}</div>
        ${line.option ? `<div class="cart-line-price">${line.product.optionLabel || "Option"}: ${line.option}</div>` : ""}
        <div class="cart-line-price">$${line.unitPrice.toFixed(2)} AUD each</div>
      </div>
      <div class="cart-qty">
        <button type="button" class="qty-minus" aria-label="Decrease quantity">−</button>
        <input type="number" class="qty-input" value="${line.qty}" min="1" aria-label="Quantity">
        <button type="button" class="qty-plus" aria-label="Increase quantity">+</button>
      </div>
      <div class="cart-line-total">$${line.lineTotal.toFixed(2)}</div>
      <button type="button" class="cart-remove">Remove</button>
    </div>
  `).join("");

  linesEl.querySelectorAll(".cart-line").forEach(row => {
    const id = row.dataset.id;
    const option = row.dataset.option || null;
    row.querySelector(".qty-minus").addEventListener("click", () => {
      const input = row.querySelector(".qty-input");
      updateCartQty(id, option, Math.max(1, Number(input.value) - 1));
      renderCartPage();
    });
    row.querySelector(".qty-plus").addEventListener("click", () => {
      const input = row.querySelector(".qty-input");
      updateCartQty(id, option, Number(input.value) + 1);
      renderCartPage();
    });
    row.querySelector(".qty-input").addEventListener("change", (e) => {
      updateCartQty(id, option, Math.max(1, Number(e.target.value)));
      renderCartPage();
    });
    row.querySelector(".cart-remove").addEventListener("click", () => {
      removeFromCart(id, option);
      renderCartPage();
    });
  });

  const subtotal = getCartSubtotal();
  document.getElementById("cartSubtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("cartTotal").textContent = `$${subtotal.toFixed(2)}`;

  const note = document.getElementById("minOrderNote");
  const proceedBtn = document.getElementById("proceedBtn");
  if (subtotal < MIN_ORDER_TOTAL) {
    const remaining = (MIN_ORDER_TOTAL - subtotal).toFixed(2);
    note.textContent = `Minimum order is $${MIN_ORDER_TOTAL}. Add $${remaining} more to check out.`;
    note.classList.remove("ok");
  } else {
    note.textContent = `Minimum order of $${MIN_ORDER_TOTAL} met — ready for checkout.`;
    note.classList.add("ok");
  }
  proceedBtn.href = "checkout.html";
}

document.addEventListener("DOMContentLoaded", renderCartPage);