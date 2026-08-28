/* ==========================================================================
   Shop page — search / price filter / category filter / product detail
   ========================================================================== */

/* Short blurbs shown above the grid when a category is selected.
   Add an entry here for any category that should get a custom description —
   anything without one falls back to the generic line below. */
const CATEGORY_INFO = {
  "Disposable Vapes": "Pre-filled, pre-charged, single-use vapes — no refilling or charging, just use until empty.",
  "Nicotine Pouches": "Tobacco-free nicotine pouches — tuck under the lip, no vapour, no smoke.",
  "Closed Pod System": "Sealed pod systems using pre-filled cartridges — simple, no e-liquid handling required.",
  "Open Pod Systems": "Refillable pod devices — top up your own e-liquid and swap coils as needed.",
  "Cream Chargers": "N2O cream chargers for culinary use.",
  "Freebase Vape Juice": "Traditional freebase e-liquids for refillable devices.",
};

function categoryBlurb(categoryName) {
  return CATEGORY_INFO[categoryName] || `Browse our full range of ${categoryName} products below.`;
}

function renderCategoryInfo() {
  const panel = document.getElementById("categoryInfo");
  if (!panel) return;
  if (activeCategory === "All") {
    panel.style.display = "none";
    return;
  }
  panel.style.display = "block";
  panel.innerHTML = `<strong>${activeCategory}</strong> — ${categoryBlurb(activeCategory)}`;
}

let activeCategory = "All";

function renderCategoryList() {
  const list = document.getElementById("categoryList");
  if (!list) return;
  const categories = getCategorySummary(); // [{name, count}] A-Z
  const totalCount = PRODUCTS.length;

  const allItem = `
    <li><a href="shop.html" data-category="All" class="${activeCategory === "All" ? "active" : ""}">
      <span>All Products</span><span class="count">(${totalCount})</span>
    </a></li>`;

  const items = categories.map(cat => `
    <li><a href="shop.html?category=${encodeURIComponent(cat.name)}" data-category="${cat.name}" class="${activeCategory === cat.name ? "active" : ""}">
      <span>${cat.name}</span><span class="count">(${cat.count})</span>
    </a></li>`).join("");

  list.innerHTML = allItem + items;

  const panel = document.getElementById("categoryPanel");
  const icon = document.getElementById("categoryToggleIcon");
  if (panel && activeCategory !== "All") {
    panel.style.display = "block";
    if (icon) icon.textContent = "−";
  }

  list.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      activeCategory = link.dataset.category;
      const url = activeCategory === "All" ? "shop.html" : `shop.html?category=${encodeURIComponent(activeCategory)}`;
      history.pushState({ category: activeCategory }, "", url);
      renderCategoryList();
      renderCategoryInfo();
      applyFilters();
      document.getElementById("shopGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function applyFilters() {
  const grid = document.getElementById("shopGrid");
  const meta = document.getElementById("resultsMeta");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  const searchTerm = (document.getElementById("searchInput").value || "").toLowerCase().trim();
  const priceValue = document.getElementById("priceInput").value;
  const minPrice = priceValue ? Math.max(50, Number(priceValue)) : null;

  let results = PRODUCTS.filter(p => {
    const haystack = [
      p.name,
      p.category,
      p.description || "",
      ...(p.flavorOptions || []),
      ...((p.priceVariants || []).map(v => v.label))
    ].join(" ").toLowerCase();
    const matchesSearch = !searchTerm || haystack.includes(searchTerm);
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesPrice = !minPrice || displayPrice(p) >= minPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  grid.innerHTML = results.map(productCardHTML).join("");
  meta.textContent = searchTerm
    ? `${results.length} result${results.length === 1 ? "" : "s"} for "${searchTerm}"`
    : `${results.length} product${results.length === 1 ? "" : "s"}`;
  emptyState.style.display = results.length === 0 ? "block" : "none";
}

function handleSearchInput() {
  const searchTerm = document.getElementById("searchInput").value.trim();
  // Searching should look across the whole catalog, not just whatever
  // category happens to still be selected from an earlier click.
  if (searchTerm && activeCategory !== "All") {
    activeCategory = "All";
    renderCategoryList();
    renderCategoryInfo();
  }
  applyFilters();
}

/* Pull a puff count out of the name/description if present, e.g. "15000 Puffs" */
function extractPuffCount(product) {
  const text = `${product.name} ${product.description || ""}`;
  const match = text.match(/(\d{3,6})\s*\+?\s*puffs/i);
  return match ? `${Number(match[1]).toLocaleString()}+ puffs` : null;
}

function buildFeatureList(product) {
  const features = [];
  features.push({ label: "Category", value: product.category });
  const puffs = extractPuffCount(product);
  if (puffs) features.push({ label: "Puff Count", value: puffs });
  if (product.attribute) features.push({ label: product.attribute.label, value: product.attribute.value });
  if (product.optionLabel && hasChoice(product)) {
    const count = product.priceVariants ? product.priceVariants.length : product.flavorOptions.length;
    features.push({ label: `${product.optionLabel} Options`, value: `${count} available` });
  }
  features.push({ label: "Price", value: hasChoice(product) ? `From $${displayPrice(product).toFixed(2)} AUD` : `$${product.price.toFixed(2)} AUD` });
  return features;
}

/* Generic FAQ set shown on every product — edit freely in this one place */
function buildFAQs(product) {
  return [
    {
      q: "Is this product available for delivery across Australia?",
      a: "Yes — we ship Australia-wide. Choose Free, Standard, Express, or International shipping at checkout depending on how soon you need it."
    },
    {
      q: "Do I need to be a certain age to buy this?",
      a: "Yes. All products on this site are intended for adults of legal smoking age only (21+), and purchasing confirms you meet that requirement."
    },
    {
      q: `How do I choose a ${(product.optionLabel || "flavor").toLowerCase()} for this product?`,
      a: hasChoice(product)
        ? `Use the ${product.optionLabel || "Flavor"} dropdown above to pick your preferred option before adding it to your cart — the price updates automatically if that option affects the price.`
        : "This product doesn't require any additional selection — just choose your quantity and add it to your cart."
    },
    {
      q: "What if my order doesn't meet the $200 minimum?",
      a: "Orders must total at least $200 AUD before checkout. Add a few more items to your cart to reach the minimum, then you'll be able to place your order."
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept select cryptocurrencies (Bitcoin SegWit and Solana), as well as bank transfer and PayID — our live agent will provide payment details for the latter two after you place your order."
    }
  ];
}

function buildDetailTabsHTML(product) {
  const features = buildFeatureList(product);
  const faqs = buildFAQs(product);

  const featuresHTML = features.map(f => `
    <div class="feature-item">
      <div class="feature-label">${f.label}</div>
      <div class="feature-value">${f.value}</div>
    </div>
  `).join("");

  const faqHTML = faqs.map((item, i) => `
    <div class="faq-item" data-faq-index="${i}">
      <button type="button" class="faq-question">
        <span>${item.q}</span><span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">${item.a}</div>
    </div>
  `).join("");

  return `
    <div class="detail-tabs">
      <div class="detail-tab-nav">
        <button type="button" class="detail-tab-btn active" data-tab="overview">Overview</button>
        <button type="button" class="detail-tab-btn" data-tab="features">Features</button>
        <button type="button" class="detail-tab-btn" data-tab="faq">FAQs</button>
      </div>
      <div class="detail-tab-panel active" data-panel="overview">
        <p class="lead">${product.description || `A ${product.category.toLowerCase()} product from our range — see the Features tab for a quick spec summary.`}</p>
      </div>
      <div class="detail-tab-panel" data-panel="features">
        <div class="feature-list">${featuresHTML}</div>
      </div>
      <div class="detail-tab-panel" data-panel="faq">
        ${faqHTML}
      </div>
    </div>
  `;
}

function wireDetailTabs() {
  document.querySelectorAll(".detail-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".detail-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".detail-tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.querySelector(`.detail-tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add("active");
    });
  });
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      q.closest(".faq-item").classList.toggle("open");
      q.querySelector(".faq-icon").textContent = q.closest(".faq-item").classList.contains("open") ? "−" : "+";
    });
  });
}

function renderProductDetail(product) {
  const browse = document.getElementById("shopBrowse");
  const detail = document.getElementById("shopDetail");
  const content = document.getElementById("productDetailContent");

  browse.style.display = "none";
  detail.style.display = "block";
  document.title = `${product.name} — australiavapedistrict`;

  const choices = product.priceVariants && product.priceVariants.length > 0
    ? product.priceVariants.map(v => v.label)
    : (product.flavorOptions || []);
  const needsChoice = hasChoice(product);

  let selectorHTML = "";
  if (needsChoice) {
    const optionLabel = product.optionLabel || "Flavor";
    selectorHTML = `
      <div class="field">
        <label for="optionSelect">${optionLabel}</label>
        <select id="optionSelect">
          ${choices.map(c => `<option value="${c}">${c}</option>`).join("")}
        </select>
      </div>`;
  } else if (product.attribute) {
    selectorHTML = `<p class="small mt-1">${product.attribute.label}: ${product.attribute.value}</p>`;
  }

  const initialPrice = needsChoice ? priceForOption(product, choices[0]) : product.price;
  const wasPrice = product.originalPrice
    ? `<span style="text-decoration:line-through;color:var(--text-secondary);margin-right:8px;">$${product.originalPrice.toFixed(2)}</span>`
    : "";

  content.innerHTML = `
    <div class="product-detail-media">
      <img src="${product.image}" alt="${product.name}" ${IMG_FALLBACK}>
    </div>
    <div class="product-detail-info">
      <span class="eyebrow">${product.category}</span>
      <h1>${product.name}</h1>
      <p class="lead mt-2">${product.description || ""}</p>
      ${selectorHTML}
      <div class="product-detail-price" id="detailPrice">${wasPrice}$${initialPrice.toFixed(2)} AUD</div>
      <div class="qty-row">
        <button type="button" id="qtyMinus" aria-label="Decrease quantity">−</button>
        <input type="number" id="qtyInput" value="1" min="1" aria-label="Quantity">
        <button type="button" id="qtyPlus" aria-label="Increase quantity">+</button>
      </div>
      <button class="btn btn-solid" id="addToCartDetail">Add to Cart</button>
    </div>
    ${buildDetailTabsHTML(product)}
  `;

  wireDetailTabs();

  const priceEl = document.getElementById("detailPrice");
  const optionSelect = document.getElementById("optionSelect");
  if (optionSelect) {
    optionSelect.addEventListener("change", () => {
      const price = priceForOption(product, optionSelect.value);
      priceEl.innerHTML = `${wasPrice}$${price.toFixed(2)} AUD`;
    });
  }

  document.getElementById("qtyMinus").addEventListener("click", () => {
    const input = document.getElementById("qtyInput");
    input.value = Math.max(1, Number(input.value) - 1);
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    const input = document.getElementById("qtyInput");
    input.value = Number(input.value) + 1;
  });
  document.getElementById("addToCartDetail").addEventListener("click", (e) => {
    const qty = Math.max(1, Number(document.getElementById("qtyInput").value));
    const selectedOption = optionSelect ? optionSelect.value : null;
    addToCart(product.id, qty, selectedOption);
    e.target.textContent = "Added to Cart";
    setTimeout(() => { e.target.textContent = "Add to Cart"; }, 2000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");

  if (productId) {
    const product = getProductById(productId);
    if (product) {
      renderProductDetail(product);
      return;
    }
  }

  // Browse view — restore category from URL if present (deep link / shared link)
  const categoryParam = params.get("category");
  if (categoryParam) {
    const validCategory = getCategorySummary().find(c => c.name === categoryParam);
    activeCategory = validCategory ? categoryParam : "All";
  }

  renderCategoryList();
  renderCategoryInfo();
  applyFilters();
  document.getElementById("searchInput").addEventListener("input", handleSearchInput);
  document.getElementById("priceInput").addEventListener("input", applyFilters);

  const categoryToggle = document.getElementById("categoryToggle");
  const categoryPanel = document.getElementById("categoryPanel");
  const categoryToggleIcon = document.getElementById("categoryToggleIcon");
  if (categoryToggle) {
    categoryToggle.addEventListener("click", () => {
      const isOpen = categoryPanel.style.display === "block";
      categoryPanel.style.display = isOpen ? "none" : "block";
      categoryToggleIcon.textContent = isOpen ? "+" : "−";
    });
  }

  // Support browser back/forward between category links
  window.addEventListener("popstate", () => {
    const p = new URLSearchParams(window.location.search);
    const cat = p.get("category");
    activeCategory = cat && getCategorySummary().find(c => c.name === cat) ? cat : "All";
    renderCategoryList();
    renderCategoryInfo();
    applyFilters();
  });
});