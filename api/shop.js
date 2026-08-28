/* ==========================================================================
   /api/shop — Vercel serverless function, mapped to /shop.html via
   vercel.json rewrites.

   Reads shop-template.html (the original static shop page, renamed so it
   can't be served directly and conflict with this route) and injects
   unique, server-rendered SEO content — title, meta description, canonical
   URL, JSON-LD, H1, and crawlable product/category content — based on the
   `product` or `category` query string. This happens BEFORE the response
   is sent, so Google (and anyone viewing "page source") sees the correct
   unique content immediately, not just after client-side JS runs.

   Client-side JS (js/shop.js etc.) still loads normally afterward and
   handles all interactivity (search, filters, add to cart, quantity,
   flavor selection) exactly as before — this only changes what the
   *initial* HTML response contains.
   ========================================================================== */

const fs = require("fs");
const path = require("path");
const {
  PRODUCTS,
  getCategorySummary,
  getProductById,
  productCardHTML,
  seoTitleForProduct,
  seoDescriptionForProduct,
  seoTitleForCategory,
  seoDescriptionForCategory,
  productJsonLd,
  productDetailServerHTML,
  escapeHtmlSSR
} = require("../js/products.js");

const BASE_URL = "https://www.australiavapedistrict.com";

const CATEGORY_INFO = {
  "Disposable Vapes": "Pre-filled, pre-charged, single-use vapes — no refilling or charging, just use until empty.",
  "Nicotine Pouches": "Tobacco-free nicotine pouches — tuck under the lip, no vapour, no smoke.",
  "Closed Pod System": "Sealed pod systems using pre-filled cartridges — simple, no e-liquid handling required.",
  "Open Pod Systems": "Refillable pod devices — top up your own e-liquid and swap coils as needed.",
  "Cream Chargers": "N2O cream chargers for culinary use.",
  "Freebase Vape Juice": "Traditional freebase e-liquids for refillable devices."
};
function categoryBlurb(category) {
  return CATEGORY_INFO[category] || `Browse our full range of ${category} products below.`;
}

const TEMPLATE_PATH = path.join(process.cwd(), "shop-template.html");

module.exports = async function handler(req, res) {
  const template = fs.readFileSync(TEMPLATE_PATH, "utf8");
  const productId = req.query.product;
  const category = req.query.category;

  let title, description, canonical, jsonld = "";
  let h1, categoryInfoStyle = "display:none;", categoryInfoHTML = "";
  let resultsMeta, shopGridHTML, shopBrowseStyle = "", shopDetailStyle = "display:none;";
  let productDetailHTML = "";
  let browseHeadingHTML;

  if (productId) {
    const product = getProductById(productId);

    if (!product) {
      res.statusCode = 404;
    }

    const p = product || { id: productId, name: "Product Not Found", category: "", description: "", image: "images/product-placeholder.jpg", price: 0 };

    title = product ? seoTitleForProduct(p) : "Product Not Found | Australia Vape District";
    description = product ? seoDescriptionForProduct(p) : "This product could not be found.";
    canonical = `${BASE_URL}/shop.html?product=${encodeURIComponent(productId)}`;
    h1 = product ? p.name : "Product Not Found";
    shopBrowseStyle = "display:none;";
    shopDetailStyle = "display:block;";
    productDetailHTML = product
      ? productDetailServerHTML(p)
      : `<div class="product-detail-info"><h1>Product Not Found</h1><p>This product may have been removed. <a href="/shop.html">Browse the shop</a>.</p></div>`;

    // The browse-view section (with its own heading) is entirely hidden in
    // product mode — the real, single <h1> for this page already lives
    // inside productDetailHTML above. Rendering another <h1> here too,
    // even hidden via CSS, would still leave two <h1> tags in the raw
    // HTML, so this omits the browse heading element entirely.
    browseHeadingHTML = "";

    if (product) {
      const ld = productJsonLd(p, BASE_URL);
      jsonld = `<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
    }

    // Browse view is hidden entirely in product mode — no need to also
    // render the full grid, keeps the response lean.
    resultsMeta = "";
    shopGridHTML = "";

  } else if (category) {
    const summary = getCategorySummary();
    const validCategory = summary.find(c => c.name === category);
    const matchedProducts = PRODUCTS.filter(p => p.category === category);

    title = seoTitleForCategory(category);
    description = seoDescriptionForCategory(category, matchedProducts.length);
    canonical = `${BASE_URL}/shop.html?category=${encodeURIComponent(category)}`;
    h1 = category;
    categoryInfoStyle = "display:block;";
    categoryInfoHTML = `<strong>${escapeHtmlSSR(category)}</strong> — ${escapeHtmlSSR(categoryBlurb(category))}`;
    resultsMeta = `${matchedProducts.length} product${matchedProducts.length === 1 ? "" : "s"}`;
    shopGridHTML = matchedProducts.map(productCardHTML).join("");
    browseHeadingHTML = `<h1>${escapeHtmlSSR(category)}</h1>`;

    if (!validCategory) {
      res.statusCode = 404;
    }

  } else {
    // Default /shop.html — no query string
    title = "Shop All Vapes Online | Australia Vape District";
    description = "Browse disposable vapes, nic salts, devices and accessories. Filter by category and price at Australia Vape District.";
    canonical = `${BASE_URL}/shop.html`;
    h1 = "The Full Range";
    resultsMeta = `${PRODUCTS.length} products`;
    shopGridHTML = PRODUCTS.map(productCardHTML).join("");
    browseHeadingHTML = `<h1>${escapeHtmlSSR(h1)}</h1>`;
  }

  const html = template
    .replace("__TITLE__", escapeHtmlSSR(title))
    .replace("__META_DESCRIPTION__", escapeHtmlSSR(description))
    .replace(/__CANONICAL__/g, canonical)
    .replace("__JSONLD__", jsonld)
    .replace("__BROWSE_HEADING__", browseHeadingHTML)
    .replace("__SHOP_BROWSE_STYLE__", shopBrowseStyle)
    .replace("__SHOP_DETAIL_STYLE__", shopDetailStyle)
    .replace("__CATEGORY_INFO_STYLE__", categoryInfoStyle)
    .replace("__CATEGORY_INFO_HTML__", categoryInfoHTML)
    .replace("__RESULTS_META__", resultsMeta)
    .replace("__SHOP_GRID_HTML__", shopGridHTML)
    .replace("__PRODUCT_DETAIL_HTML__", productDetailHTML);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
  res.send(html);
};