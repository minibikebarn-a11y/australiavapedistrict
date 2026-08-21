/* ==========================================================================
   Checkout page logic
   ========================================================================== */

/* --------------------------------------------------------------------------
   PLACEHOLDER VALUES — replace before going live:
   - CRYPTO_ADDRESSES: put your real receiving wallet addresses here
   -------------------------------------------------------------------------- */
const CRYPTO_ADDRESSES = {
  "btc-segwit": "bc1qhtjs7xmhsq60w5dsk6mypvkfgfajyscdt7fcmr",
  "sol": "ELTLnJxki3APHqfHPsir9xoymwtHMoGWJ5kTVqFe1wZs"
};
const CRYPTO_LABELS = {
  "btc-segwit": "BTC (SegWit)",
  "sol": "SOL"
};

/* Live AUD exchange rates, fetched from CoinGecko's free public API.
   Cached for a few minutes so we're not hitting the API on every keystroke.
   Falls back to a static rate only if the live fetch genuinely fails
   (e.g. no internet, API down) — the fallback numbers WILL go stale over
   time, so update them occasionally even though they're rarely used. */
const CRYPTO_RATES_FALLBACK = {
  "btc-segwit": 100000,
  "sol": 180
};
const CRYPTO_RATE_CACHE_MS = 5 * 60 * 1000; // 5 minutes
let cryptoRatesCache = null;
let cryptoRatesFetchedAt = 0;
let cryptoRatesAreLive = false;

async function getCryptoRates() {
  const now = Date.now();
  if (cryptoRatesCache && (now - cryptoRatesFetchedAt) < CRYPTO_RATE_CACHE_MS) {
    return cryptoRatesCache;
  }
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,solana&vs_currencies=aud");
    if (!res.ok) throw new Error("Rate API returned " + res.status);
    const data = await res.json();
    if (!data.bitcoin?.aud || !data.solana?.aud) throw new Error("Unexpected rate API response");
    cryptoRatesCache = {
      "btc-segwit": data.bitcoin.aud,
      "sol": data.solana.aud
    };
    cryptoRatesFetchedAt = now;
    cryptoRatesAreLive = true;
    return cryptoRatesCache;
  } catch (e) {
    console.warn("Live crypto rate fetch failed, using fallback rates:", e);
    cryptoRatesAreLive = false;
    return CRYPTO_RATES_FALLBACK;
  }
}

async function updateLiveRateNote() {
  const note = document.getElementById("liveRateNote");
  const currencySelect = document.getElementById("cryptoCurrency");
  if (!note || !currencySelect) return;
  const rates = await getCryptoRates();
  const currency = currencySelect.value;
  const rate = rates[currency];
  const statusText = cryptoRatesAreLive ? "live rate" : "fallback rate — could not reach live pricing";
  note.textContent = `1 ${CRYPTO_LABELS[currency]} ≈ $${rate.toLocaleString()} AUD (${statusText})`;
}

function currentShippingCost() {
  const selected = document.querySelector('input[name="shipping"]:checked');
  return selected ? Number(selected.value) : 0;
}
function currentShippingLabel() {
  const selected = document.querySelector('input[name="shipping"]:checked');
  return selected ? selected.dataset.label : "";
}

function renderSummary() {
  const lines = getCartDetails();
  const subtotal = getCartSubtotal();
  const shipping = currentShippingCost();
  const total = subtotal + shipping;

  document.getElementById("summaryItems").innerHTML = lines.map(line => `
    <div class="order-summary-line">
      <span>${line.product.name}${line.option ? ` (${line.option})` : ""} × ${line.qty}</span>
      <span>$${line.lineTotal.toFixed(2)}</span>
    </div>
  `).join("");

  document.getElementById("summarySubtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("summaryShipping").textContent = `$${shipping.toFixed(2)}`;
  document.getElementById("summaryTotal").textContent = `$${total.toFixed(2)}`;

  const blocker = document.getElementById("minOrderBlocker");
  const placeBtn = document.getElementById("placeOrderBtn");
  if (subtotal < MIN_ORDER_TOTAL) {
    const remaining = (MIN_ORDER_TOTAL - subtotal).toFixed(2);
    blocker.style.display = "block";
    blocker.textContent = `Minimum order is $${MIN_ORDER_TOTAL}. Add $${remaining} more in your cart before you can place this order.`;
    placeBtn.disabled = true;
    placeBtn.style.opacity = "0.5";
    placeBtn.style.cursor = "not-allowed";
  } else {
    blocker.style.display = "none";
    placeBtn.disabled = false;
    placeBtn.style.opacity = "1";
    placeBtn.style.cursor = "pointer";
  }
}

function togglePaymentPanels() {
  const method = document.querySelector('input[name="payment"]:checked').value;
  document.getElementById("cryptoOptions").style.display = method === "crypto" ? "block" : "none";
  document.getElementById("bankNote").style.display = method === "bank" ? "block" : "none";
  document.getElementById("payidNote").style.display = method === "payid" ? "block" : "none";
}

function generateOrderNumber() {
  return "AVD-" + Math.floor(100000 + Math.random() * 900000);
}

function collectAddress(prefix) {
  const get = id => document.getElementById(id)?.value || "";
  return {
    firstName: get(`${prefix}FirstName`),
    lastName: get(`${prefix}LastName`),
    country: get(`${prefix}Country`),
    suburb: get(`${prefix}Suburb`),
    state: get(`${prefix}State`),
    postcode: get(`${prefix}Postcode`),
    phone: get(`${prefix}Phone`),
    email: get(`${prefix}Email`)
  };
}

function formatAddress(addr) {
  return `${addr.firstName} ${addr.lastName}, ${addr.suburb} ${addr.state} ${addr.postcode}, ${addr.country} — ${addr.phone}, ${addr.email}`;
}

async function placeOrder(e) {
  e.preventDefault();

  const subtotal = getCartSubtotal();
  if (subtotal < MIN_ORDER_TOTAL) return; // guarded by disabled button, double-checked here

  const form = document.getElementById("checkoutForm");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  const placeBtn = document.getElementById("placeOrderBtn");
  const originalBtnText = placeBtn.textContent;

  // Crypto orders need a fresh rate lookup before we can show the exact amount owed
  let rates = null;
  if (paymentMethod === "crypto") {
    placeBtn.disabled = true;
    placeBtn.textContent = "Fetching live rate…";
    rates = await getCryptoRates();
    placeBtn.disabled = false;
    placeBtn.textContent = originalBtnText;
  }

  const shipping = currentShippingCost();
  const shippingLabel = currentShippingLabel();
  const total = subtotal + shipping;

  const billing = collectAddress("bill");
  const shipDifferent = document.getElementById("shipDifferent").checked;
  const shippingAddress = shipDifferent ? collectAddress("ship") : billing;
  const orderNotes = document.getElementById("orderNotes").value;
  const orderNumber = generateOrderNumber();

  // Build order details table (shared across both confirmation types)
  const itemsSummary = getCartDetails().map(line =>
    `${line.product.name}${line.option ? ` (${line.option})` : ""} × ${line.qty} — $${line.lineTotal.toFixed(2)}`
  ).join("<br>");

  const rows = [
    ["Order Number", orderNumber],
    ["Items", itemsSummary],
    ["Shipping Method", `${shippingLabel} — $${shipping.toFixed(2)}`],
    ["Subtotal", `$${subtotal.toFixed(2)}`],
    ["Total", `$${total.toFixed(2)}`],
    ["Billing Address", formatAddress(billing)],
    ["Shipping Address", formatAddress(shippingAddress)]
  ];
  if (orderNotes) rows.push(["Order Notes", orderNotes]);

  document.getElementById("orderDetailTable").innerHTML = rows.map(
    ([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`
  ).join("");

  const cryptoPanel = document.getElementById("cryptoPaymentPanel");
  const agentPanel = document.getElementById("agentPaymentPanel");

  if (paymentMethod === "crypto") {
    const currency = document.getElementById("cryptoCurrency").value;
    const rate = rates[currency];
    const amount = (total / rate).toFixed(currency === "btc-segwit" ? 8 : 4);
    const address = CRYPTO_ADDRESSES[currency];
    const rateNote = cryptoRatesAreLive
      ? `Calculated from the live rate of $${rate.toLocaleString()} AUD per ${CRYPTO_LABELS[currency]}.`
      : `Calculated from a fallback rate of $${rate.toLocaleString()} AUD per ${CRYPTO_LABELS[currency]} — live pricing was unavailable, please double-check the current rate before sending.`;

    document.getElementById("cryptoInstruction").textContent =
      `To complete your order, send the exact amount below in ${CRYPTO_LABELS[currency]} to the address shown. ${rateNote}`;
    document.getElementById("cryptoAmount").textContent = `${amount} ${CRYPTO_LABELS[currency]}`;
    document.getElementById("cryptoAddress").textContent = address;
    document.getElementById("cryptoWindow").textContent = "Please complete payment within 30 minutes of placing this order.";
    document.getElementById("qrCodeImg").src =
      `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(address)}`;

    cryptoPanel.style.display = "block";
    agentPanel.style.display = "none";
  } else {
    const methodLabel = paymentMethod === "bank" ? "bank details" : "PayID payment instructions";
    document.getElementById("agentInstruction").textContent =
      `Order ${orderNumber} has been received. Please contact our live agent in the live chat for ${methodLabel}.`;
    agentPanel.style.display = "block";
    cryptoPanel.style.display = "none";
  }

  document.getElementById("checkoutView").style.display = "none";
  document.getElementById("confirmationView").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Clear cart now that the order has been captured
  saveCart([]);
}

document.addEventListener("DOMContentLoaded", () => {
  if (getCartDetails().length === 0) {
    document.getElementById("checkoutForm").style.display = "none";
    document.getElementById("emptyCartNotice").style.display = "block";
    return;
  }

  renderSummary();
  togglePaymentPanels();
  updateLiveRateNote();

  document.getElementById("cryptoCurrency").addEventListener("change", updateLiveRateNote);

  document.querySelectorAll('input[name="shipping"]').forEach(input => {
    input.addEventListener("change", renderSummary);
  });
  document.querySelectorAll('input[name="payment"]').forEach(input => {
    input.addEventListener("change", togglePaymentPanels);
  });
  document.getElementById("shipDifferent").addEventListener("change", (e) => {
    document.getElementById("shipAddressFields").style.display = e.target.checked ? "block" : "none";
    document.querySelectorAll("#shipAddressFields input").forEach(input => {
      input.required = e.target.checked;
    });
  });

  document.getElementById("checkoutForm").addEventListener("submit", placeOrder);
});