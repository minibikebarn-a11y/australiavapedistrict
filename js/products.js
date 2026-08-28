/* ==========================================================================
   Product catalog — EDIT THIS FILE to add/change/remove products.
   Generated from Cocoa's supplied product list (Aug 2026).

   IMAGES: each product's `image` field points to images/<id>.jpg — just save
   your product photos into the images/ folder using that exact filename and
   they'll show up automatically, no code changes needed. Until a photo
   exists, the site falls back to images/product-placeholder.jpg so nothing
   ever shows a broken image icon.

   Product fields:
   - id, name, category, price (base/default price, AUD), image, description
   - attribute {label, value}   : fixed info shown on the product (e.g. a single colour), no selection needed
   - optionLabel                : label for the selector, e.g. "Flavor", "Colour", "Strength", "Pack Size"
   - flavorOptions [string,...] : choices at the SAME price as `price`
   - priceVariants [{label,price}] : choices at DIFFERENT prices — overrides flavorOptions, price shown as "From $X"
   - originalPrice               : if set, shown as a struck-through "was" price
   - note                        : internal note for Cocoa, not shown to customers, flags data that needs confirming

   NOTE: A handful of products (marked with a `note` field) had incomplete
   pricing in the original list (ranges without a breakdown, or duplicate
   listings with different prices). Placeholder values were used — search
   this file for "note" to find and confirm/update them.
   ========================================================================== */

const PRODUCTS =
[
  {
    "id": "infinity-deal-10pod",
    "name": "Infinity Deal \u2014 10 Relax Infinity Pod",
    "category": "Infinity Pod",
    "price": 100.0,
    "image": "images/infinity-deal-10pod.jpg",
    "description": "Bundle deal of 10 Relax Infinity Pods.",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Flavor selection \u2014 add your flavor names in products.js"
    ]
  },
  {
    "id": "cartisan-pro-pen-neo-650",
    "name": "Cartisan Pro Pen Neo 650 \u2014 510 Thread Battery",
    "category": "510 Thread Batteries",
    "price": 10.5,
    "image": "images/cartisan-pro-pen-neo-650.jpg",
    "description": "510 thread vape battery.",
    "attribute": {
      "label": "Colour",
      "value": "Purple"
    }
  },
  {
    "id": "cartisan-veil-bar-flow",
    "name": "Cartisan Veil Bar Flow \u2014 510 Battery",
    "category": "510 Thread Batteries",
    "price": 27.0,
    "image": "images/cartisan-veil-bar-flow.jpg",
    "description": "510 thread vape battery.",
    "optionLabel": "Colour",
    "flavorOptions": [
      "Noir",
      "Ocean Depths",
      "Sky",
      "Zenith"
    ]
  },
  {
    "id": "cartisan-veil-bar-neo",
    "name": "Cartisan Veil Bar Neo \u2014 510 Battery",
    "category": "510 Thread Batteries",
    "price": 18.0,
    "image": "images/cartisan-veil-bar-neo.jpg",
    "description": "510 thread vape battery.",
    "optionLabel": "Colour",
    "flavorOptions": [
      "Blaze",
      "Blush",
      "Fog",
      "Noir",
      "Ocean Depths",
      "Synthwave",
      "Zenith"
    ]
  },
  {
    "id": "cartisan-veil-bar-pro-evo",
    "name": "Cartisan Veil Bar Pro Evo \u2014 510 Battery",
    "category": "510 Thread Batteries",
    "price": 30.0,
    "image": "images/cartisan-veil-bar-pro-evo.jpg",
    "description": "510 thread vape battery.",
    "optionLabel": "Colour",
    "flavorOptions": [
      "Blaze",
      "Charcoal",
      "Dawn",
      "Iridescent",
      "Meadow",
      "Obsidian",
      "Zenith"
    ]
  },
  {
    "id": "adalya-love-66",
    "name": "Adalya - Love 66 \u2014 16000 Puffs",
    "category": "Adalya",
    "price": 49.99,
    "image": "images/adalya-love-66.jpg",
    "description": ""
  },
  {
    "id": "adalya-two-apples",
    "name": "Adalya - The Two Apples \u2014 16000 Puffs",
    "category": "Adalya",
    "price": 49.99,
    "image": "images/adalya-two-apples.jpg",
    "description": ""
  },
  {
    "id": "alfakher-crown-bar-15000-10pack",
    "name": "Alfakher Crown Bar 15000 Puffs \u2014 10 Pack",
    "category": "Alfakher Crown Bar 15000",
    "price": 510.95,
    "image": "images/alfakher-crown-bar-15000-10pack.jpg",
    "description": ""
  },
  {
    "id": "alfakher-crown-bar-15000-3pack",
    "name": "Alfakher Crown Bar 15000 Puffs \u2014 3 Pack",
    "category": "Alfakher Crown Bar 15000",
    "price": 173.99,
    "image": "images/alfakher-crown-bar-15000-3pack.jpg",
    "description": ""
  },
  {
    "id": "alfakher-crown-bar-15000-5pack",
    "name": "Alfakher Crown Bar 15000 Puffs \u2014 5 Pack",
    "category": "Alfakher Crown Bar 15000",
    "price": 274.99,
    "image": "images/alfakher-crown-bar-15000-5pack.jpg",
    "description": ""
  },
  {
    "id": "alfakher-crown-bar-15000-20pack",
    "name": "Alfakher Crown Bar 15000 Puffs \u2014 20 Pack",
    "category": "Alfakher Crown Bar 15000",
    "price": 979.0,
    "image": "images/alfakher-crown-bar-15000-20pack.jpg",
    "description": ""
  },
  {
    "id": "alfakher-crown-bar-15000",
    "name": "Alfakher Crown Bar \u2014 15000 Puffs",
    "category": "Alfakher Crown Bar 15000",
    "price": 59.95,
    "image": "images/alfakher-crown-bar-15000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Black Currant Ice",
      "Blue Razz Lemonade",
      "Grape Mint",
      "Lemon Mint",
      "Peach Ice"
    ]
  },
  {
    "id": "alfakher-crown-bar-8000-3pack",
    "name": "Alfakher Crown Bar 8000 Puffs \u2014 3 Pack",
    "category": "Alfakher Crown Bar 8000",
    "price": 129.99,
    "image": "images/alfakher-crown-bar-8000-3pack.jpg",
    "description": ""
  },
  {
    "id": "alfakher-crown-bar-8000-5pack",
    "name": "Alfakher Crown Bar 8000 Puffs \u2014 5 Pack",
    "category": "Alfakher Crown Bar 8000",
    "price": 199.95,
    "image": "images/alfakher-crown-bar-8000-5pack.jpg",
    "description": ""
  },
  {
    "id": "alfakher-crown-bar-8000-10pack",
    "name": "Alfakher Crown Bar 8000 Puffs \u2014 10 Pack",
    "category": "Alfakher Crown Bar 8000",
    "price": 389.95,
    "image": "images/alfakher-crown-bar-8000-10pack.jpg",
    "description": ""
  },
  {
    "id": "alfakher-crown-bar-8000-20pack",
    "name": "Alfakher Crown Bar 8000 Puffs \u2014 20 Pack",
    "category": "Alfakher Crown Bar 8000",
    "price": 719.95,
    "image": "images/alfakher-crown-bar-8000-20pack.jpg",
    "description": ""
  },
  {
    "id": "alfakher-crown-bar-8000",
    "name": "Alfakher Crown Bar \u2014 8000 Puffs",
    "category": "Alfakher Crown Bar 8000",
    "price": 44.95,
    "image": "images/alfakher-crown-bar-8000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Berry Ice",
      "Berry Mint",
      "Blue Razz Lemonade",
      "Blueberry Bubble Gum",
      "Cherry Raspberry"
    ]
  },
  {
    "id": "alibarbar-ingot-9000-3pack",
    "name": "Alibarbar Ingot 9000 Puffs \u2014 3 Pack",
    "category": "Alibarbar 9000",
    "price": 169.96,
    "image": "images/alibarbar-ingot-9000-3pack.jpg",
    "description": ""
  },
  {
    "id": "alibarbar-ingot-9000-5pack",
    "name": "Alibarbar Ingot 9000 Puffs \u2014 5 Pack",
    "category": "Alibarbar 9000",
    "price": 269.95,
    "image": "images/alibarbar-ingot-9000-5pack.jpg",
    "description": ""
  },
  {
    "id": "alibarbar-ingot-9000-10pack",
    "name": "Alibarbar Ingot 9000 Puffs \u2014 10 Pack",
    "category": "Alibarbar 9000",
    "price": 519.95,
    "image": "images/alibarbar-ingot-9000-10pack.jpg",
    "description": ""
  },
  {
    "id": "alibarbar-ingot-9000-20pack",
    "name": "Alibarbar Ingot 9000 Puffs \u2014 20 Pack",
    "category": "Alibarbar 9000",
    "price": 999.95,
    "image": "images/alibarbar-ingot-9000-20pack.jpg",
    "description": ""
  },
  {
    "id": "alibarbar-ingot-9000",
    "name": "Alibarbar Ingot \u2014 9000 Puffs",
    "category": "Alibarbar 9000",
    "price": 59.95,
    "image": "images/alibarbar-ingot-9000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Banana Buzz",
      "Blackberry Ice",
      "Blueberry Blast",
      "Chupa Chups Strawberry",
      "Tobacco",
      "Double Apple"
    ]
  },
  {
    "id": "bang-20000-3pack",
    "name": "Bang 20000 Puffs \u2014 3 Pack",
    "category": "Bang 20000",
    "price": 134.95,
    "image": "images/bang-20000-3pack.jpg",
    "description": ""
  },
  {
    "id": "bang-20000-5pack",
    "name": "Bang 20000 Puffs \u2014 5 Pack",
    "category": "Bang 20000",
    "price": 219.95,
    "image": "images/bang-20000-5pack.jpg",
    "description": ""
  },
  {
    "id": "bang-20000-10pack",
    "name": "Bang 20000 Puffs \u2014 10 Pack",
    "category": "Bang 20000",
    "price": 399.95,
    "image": "images/bang-20000-10pack.jpg",
    "description": ""
  },
  {
    "id": "bang-20000-20pack",
    "name": "Bang 20000 Puffs \u2014 20 Pack",
    "category": "Bang 20000",
    "price": 699.8,
    "image": "images/bang-20000-20pack.jpg",
    "description": ""
  },
  {
    "id": "bang-20000",
    "name": "Bang \u2014 20000 Puffs",
    "category": "Bang 20000",
    "price": 49.99,
    "image": "images/bang-20000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Blueberry Ice",
      "Blueberry Raspberry",
      "Blueberry Watermelon",
      "Double Apple",
      "Strawberry Kiwi"
    ]
  },
  {
    "id": "brisk-bar-5000-3pack",
    "name": "Brisk Bar 5000 Puffs \u2014 3 Pack",
    "category": "Brisk Bar 5000",
    "price": 48.0,
    "image": "images/brisk-bar-5000-3pack.jpg",
    "description": ""
  },
  {
    "id": "brisk-bar-5000-5pack",
    "name": "Brisk Bar 5000 Puffs \u2014 5 Pack",
    "category": "Brisk Bar 5000",
    "price": 75.0,
    "image": "images/brisk-bar-5000-5pack.jpg",
    "description": ""
  },
  {
    "id": "brisk-bar-5000-10pack",
    "name": "Brisk Bar 5000 Puffs \u2014 10 Pack",
    "category": "Brisk Bar 5000",
    "price": 140.0,
    "image": "images/brisk-bar-5000-10pack.jpg",
    "description": ""
  },
  {
    "id": "brisk-bar-5000-20pack",
    "name": "Brisk Bar 5000 Puffs \u2014 20 Pack",
    "category": "Brisk Bar 5000",
    "price": 260.0,
    "image": "images/brisk-bar-5000-20pack.jpg",
    "description": ""
  },
  {
    "id": "brisk-bar-5000-50pack",
    "name": "Brisk Bar 5000 Puffs \u2014 50 Pack",
    "category": "Brisk Bar 5000",
    "price": 600.0,
    "image": "images/brisk-bar-5000-50pack.jpg",
    "description": ""
  },
  {
    "id": "brisk-bar-5000",
    "name": "Brisk Bar \u2014 5000 Puffs",
    "category": "Brisk Bar 5000",
    "price": 17.0,
    "image": "images/brisk-bar-5000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Banana Crispy Ice",
      "Bloody Cold",
      "Blueberry Ice",
      "Cola Ice"
    ]
  },
  {
    "id": "chapo-white",
    "name": "Chapo White",
    "category": "Chapo White",
    "price": 20.0,
    "image": "images/chapo-white.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Blueberry Ice",
      "Polar Mint",
      "Watermelon"
    ]
  },
  {
    "id": "juul-battery-charger-kit",
    "name": "JUUL Battery Charger Kit",
    "category": "Closed Pod System",
    "price": 19.99,
    "image": "images/juul-battery-charger-kit.jpg",
    "description": ""
  },
  {
    "id": "juul-menthol-pod-5-1pack",
    "name": "JUUL Menthol Pod 5% \u2014 1 Pack",
    "category": "Closed Pod System",
    "price": 7.25,
    "image": "images/juul-menthol-pod-5-1pack.jpg",
    "description": ""
  },
  {
    "id": "juul-menthol-pods-3-4pack",
    "name": "JUUL Menthol Pods 3% \u2014 4 Pack",
    "category": "Closed Pod System",
    "price": 19.99,
    "image": "images/juul-menthol-pods-3-4pack.jpg",
    "description": ""
  },
  {
    "id": "juul-menthol-pods-5-2pack",
    "name": "JUUL Menthol Pods 5% \u2014 2 Pack",
    "category": "Closed Pod System",
    "price": 12.99,
    "image": "images/juul-menthol-pods-5-2pack.jpg",
    "description": ""
  },
  {
    "id": "juul-menthol-pods-5-4pack",
    "name": "JUUL Menthol Pods 5% \u2014 4 Pack",
    "category": "Closed Pod System",
    "price": 19.99,
    "image": "images/juul-menthol-pods-5-4pack.jpg",
    "description": ""
  },
  {
    "id": "juul-virginia-tobacco-pods-5-4pack",
    "name": "JUUL Virginia Tobacco Pods 5% \u2014 4 Pack",
    "category": "Closed Pod System",
    "price": 19.99,
    "image": "images/juul-virginia-tobacco-pods-5-4pack.jpg",
    "description": ""
  },
  {
    "id": "mosa-cream-chargers-50pack",
    "name": "Mosa Cream Chargers N2O \u2014 50 Pack",
    "category": "Cream Chargers",
    "price": 39.0,
    "image": "images/mosa-cream-chargers-50pack.jpg",
    "description": ""
  },
  {
    "id": "supremewhip-cream-chargers-10pack",
    "name": "Supremewhip Cream Chargers N2O \u2014 10 Pack",
    "category": "Cream Chargers",
    "price": 10.0,
    "image": "images/supremewhip-cream-chargers-10pack.jpg",
    "description": ""
  },
  {
    "id": "supremewhip-cream-chargers-bulk",
    "name": "Supremewhip Cream Chargers N2O \u2014 Wholesale Bulk",
    "category": "Cream Chargers",
    "price": 230.0,
    "image": "images/supremewhip-cream-chargers-bulk.jpg",
    "description": "",
    "optionLabel": "Quantity",
    "priceVariants": [
      {
        "label": "300pcs",
        "price": 230.0
      },
      {
        "label": "500pcs",
        "price": 380.0
      },
      {
        "label": "1000pcs",
        "price": 750.0
      },
      {
        "label": "2000pcs",
        "price": 1450.0
      },
      {
        "label": "5000pcs",
        "price": 2900.0
      }
    ],
    "note": "Bulk tier pricing estimated between the given $230\u2013$2,900 range \u2014 confirm exact per-tier pricing."
  },
  {
    "id": "dork-bar-disposable-50000",
    "name": "Dork Bar Disposable Kit \u2014 50000 Puffs",
    "category": "Disposable Vapes",
    "price": 29.99,
    "image": "images/dork-bar-disposable-50000.jpg",
    "description": ""
  },
  {
    "id": "dinner-lady-50k-disposable",
    "name": "Dinner Lady 50K Disposable \u2014 50000 Puffs",
    "category": "Disposable Vapes",
    "price": 25.99,
    "image": "images/dinner-lady-50k-disposable.jpg",
    "description": ""
  },
  {
    "id": "cali-ul3000-disposable",
    "name": "Cali UL3000 Disposable \u2014 3000 Puffs",
    "category": "Disposable Vapes",
    "price": 10.99,
    "image": "images/cali-ul3000-disposable.jpg",
    "description": ""
  },
  {
    "id": "beri-crush-disposable-50000",
    "name": "Beri Crush Disposable Vape \u2014 50000 Puffs",
    "category": "Disposable Vapes",
    "price": 22.99,
    "image": "images/beri-crush-disposable-50000.jpg",
    "description": ""
  },
  {
    "id": "beri-cliq-50k-replacement-pod",
    "name": "Beri Cliq 50K Replacement Pod \u2014 50000 Puffs",
    "category": "Disposable Vapes",
    "price": 10.99,
    "image": "images/beri-cliq-50k-replacement-pod.jpg",
    "description": "",
    "originalPrice": 15.99
  },
  {
    "id": "beri-cliq-50k-disposable-kit",
    "name": "Beri Cliq 50K Disposable Vape Kit \u2014 50000 Puffs",
    "category": "Disposable Vapes",
    "price": 18.99,
    "image": "images/beri-cliq-50k-disposable-kit.jpg",
    "description": ""
  },
  {
    "id": "beco-holo-max-disposable-60000",
    "name": "Beco Holo Max Disposable \u2014 60000 Puffs",
    "category": "Disposable Vapes",
    "price": 26.99,
    "image": "images/beco-holo-max-disposable-60000.jpg",
    "description": "",
    "optionLabel": "Size",
    "priceVariants": [
      {
        "label": "Standard",
        "price": 26.99
      },
      {
        "label": "Bulk",
        "price": 110.0
      }
    ],
    "note": "Original listing showed a $26.99\u2013$110.00 range without tier breakdown \u2014 confirm exact size/price tiers."
  },
  {
    "id": "adjust-myrusher-disposable-40000",
    "name": "Adjust MyRusher Disposable \u2014 40000 Puffs",
    "category": "Disposable Vapes",
    "price": 19.99,
    "image": "images/adjust-myrusher-disposable-40000.jpg",
    "description": ""
  },
  {
    "id": "dope",
    "name": "Dope",
    "category": "Dope",
    "price": 20.0,
    "image": "images/dope.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Freeze",
      "Ice Mango",
      "Lime Smash",
      "Melon"
    ]
  },
  {
    "id": "fresh-farms-vape-juice-60ml",
    "name": "Fresh Farms Vape Juice \u2014 60ml",
    "category": "Freebase Vape Juice",
    "price": 12.99,
    "image": "images/fresh-farms-vape-juice-60ml.jpg",
    "description": ""
  },
  {
    "id": "fruitia-vape-juice-60ml",
    "name": "Fruitia Vape Juice \u2014 60ml",
    "category": "Freebase Vape Juice",
    "price": 12.99,
    "image": "images/fruitia-vape-juice-60ml.jpg",
    "description": ""
  },
  {
    "id": "jus-by-fruitia-vape-juice-60ml",
    "name": "Jus by Fruitia Vape Juice \u2014 60ml",
    "category": "Freebase Vape Juice",
    "price": 12.99,
    "image": "images/jus-by-fruitia-vape-juice-60ml.jpg",
    "description": ""
  },
  {
    "id": "monster-vape-labs-the-milk-100ml",
    "name": "Monster Vape Labs \"The Milk\" Vape Juice \u2014 100ml",
    "category": "Freebase Vape Juice",
    "price": 14.99,
    "image": "images/monster-vape-labs-the-milk-100ml.jpg",
    "description": ""
  },
  {
    "id": "goat",
    "name": "Goat",
    "category": "GOAT",
    "price": 20.0,
    "image": "images/goat.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Cool Mint",
      "Crystal Ice",
      "Frosted",
      "Wild Cherry"
    ]
  },
  {
    "id": "groomax-10000-10pack",
    "name": "Groo Max 10000 Puffs \u2014 10 Pack",
    "category": "Groomax Packs",
    "price": 519.95,
    "image": "images/groomax-10000-10pack.jpg",
    "description": ""
  },
  {
    "id": "groomax-10000-20pack",
    "name": "Groo Max 10000 Puffs \u2014 20 Pack",
    "category": "Groomax Packs",
    "price": 988.88,
    "image": "images/groomax-10000-20pack.jpg",
    "description": ""
  },
  {
    "id": "gunnpod-lite-1400",
    "name": "Gunnpod Lite \u2014 1400 Puffs",
    "category": "Gunnpod Lite 1400",
    "price": 7.0,
    "image": "images/gunnpod-lite-1400.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Apple Mango Pear",
      "Banana Papaya",
      "Lush Ice",
      "Melon Berry"
    ]
  },
  {
    "id": "gunnpod-lume-5000",
    "name": "Gunnpod Lume \u2014 5000 Puffs",
    "category": "Gunnpod Lume 5000",
    "price": 26.0,
    "image": "images/gunnpod-lume-5000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Kiwi Passionfruit Guava Ice",
      "Grape Ice",
      "Fruit Monster",
      "Energy Drink Berries",
      "Cola Ice",
      "Apple Bomb"
    ]
  },
  {
    "id": "gunnpod-moss-8000-pod-apple-bomb",
    "name": "Gunnpod Moss Apple Bomb \u2014 8000 Puffs (Pod Only)",
    "category": "Gunnpod Moss 8000",
    "price": 39.95,
    "image": "images/gunnpod-moss-8000-pod-apple-bomb.jpg",
    "description": ""
  },
  {
    "id": "gunnpod-moss-8000-device-only",
    "name": "Gunnpod Moss 8000 \u2014 Device Only",
    "category": "Gunnpod Moss 8000",
    "price": 29.95,
    "image": "images/gunnpod-moss-8000-device-only.jpg",
    "description": "",
    "optionLabel": "Colour",
    "flavorOptions": [
      "Silver",
      "Red",
      "Blue",
      "Black"
    ]
  },
  {
    "id": "gunnpod-moss-8000-pod-3pack",
    "name": "Gunnpod Moss 8000 Puffs \u2014 3 Pack (Pod Only)",
    "category": "Gunnpod Moss 8000",
    "price": 114.95,
    "image": "images/gunnpod-moss-8000-pod-3pack.jpg",
    "description": ""
  },
  {
    "id": "gunnpod-moss-8000-pod-5pack",
    "name": "Gunnpod Moss 8000 Puffs \u2014 5 Pack (Pod Only)",
    "category": "Gunnpod Moss 8000",
    "price": 189.95,
    "image": "images/gunnpod-moss-8000-pod-5pack.jpg",
    "description": ""
  },
  {
    "id": "gunnpod-moss-8000-pod-10pack",
    "name": "Gunnpod Moss 8000 Puffs \u2014 10 Pack (Pod Only)",
    "category": "Gunnpod Moss 8000",
    "price": 349.5,
    "image": "images/gunnpod-moss-8000-pod-10pack.jpg",
    "description": ""
  },
  {
    "id": "gunnpod-moss-8000-pod-20pack",
    "name": "Gunnpod Moss 8000 Puffs \u2014 20 Pack (Pod Only)",
    "category": "Gunnpod Moss 8000",
    "price": 679.99,
    "image": "images/gunnpod-moss-8000-pod-20pack.jpg",
    "description": ""
  },
  {
    "id": "gunnpod-plus-4500-3pack",
    "name": "Gunnpod Plus 4500 Puffs \u2014 3 Pack",
    "category": "Gunnpod Plus 4500",
    "price": 83.0,
    "image": "images/gunnpod-plus-4500-3pack.jpg",
    "description": ""
  },
  {
    "id": "gunnpod-plus-4500-10pack",
    "name": "Gunnpod Plus 4500 Puffs \u2014 10 Pack",
    "category": "Gunnpod Plus 4500",
    "price": 259.0,
    "image": "images/gunnpod-plus-4500-10pack.jpg",
    "description": ""
  },
  {
    "id": "gunnpod-plus-4500-50pack",
    "name": "Gunnpod Plus 4500 Puffs \u2014 50 Pack",
    "category": "Gunnpod Plus 4500",
    "price": 1199.0,
    "image": "images/gunnpod-plus-4500-50pack.jpg",
    "description": ""
  },
  {
    "id": "gunnpod-plus-4500",
    "name": "Gunnpod Plus \u2014 4500 Puffs",
    "category": "Gunnpod Plus 4500",
    "price": 29.0,
    "image": "images/gunnpod-plus-4500.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Cool Mint",
      "Cola Ice",
      "Classic Tobacco",
      "Cherry Pomegranate Ice"
    ]
  },
  {
    "id": "gunnpod-wave-3500",
    "name": "Gunnpod Wave \u2014 3500 Puffs",
    "category": "Gunnpod Wave 3500",
    "price": 25.0,
    "image": "images/gunnpod-wave-3500.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "priceVariants": [
      {
        "label": "Pineapple Orange Guava",
        "price": 25.0
      },
      {
        "label": "Peach Blue Raspberry Ice",
        "price": 30.0
      },
      {
        "label": "Mango Peach",
        "price": 30.0
      },
      {
        "label": "Double Apple",
        "price": 25.0
      },
      {
        "label": "Blue Raspberry Cherry Lemon",
        "price": 25.0
      },
      {
        "label": "Cola Ice",
        "price": 30.0
      }
    ]
  },
  {
    "id": "hqd-box-4000",
    "name": "HQD Box \u2014 4000 Puffs",
    "category": "HQD Box 4000",
    "price": 30.0,
    "image": "images/hqd-box-4000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Fresh Berries",
      "Blueberry",
      "Blue Raspberry Kiwi Lemonade",
      "Black Ice",
      "Banana Ice",
      "Apple Peach"
    ]
  },
  {
    "id": "hqd-slick-6000-3pack",
    "name": "HQD Slick 6000 Puffs \u2014 3 Pack",
    "category": "HQD Slick 6000",
    "price": 149.95,
    "image": "images/hqd-slick-6000-3pack.jpg",
    "description": ""
  },
  {
    "id": "hqd-slick-6000-5pack",
    "name": "HQD Slick 6000 Puffs \u2014 5 Pack",
    "category": "HQD Slick 6000",
    "price": 234.95,
    "image": "images/hqd-slick-6000-5pack.jpg",
    "description": ""
  },
  {
    "id": "hqd-slick-6000",
    "name": "HQD Slick \u2014 6000 Puffs",
    "category": "HQD Slick 6000",
    "price": 54.95,
    "image": "images/hqd-slick-6000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Ice Mint",
      "Guava Ice",
      "Grapey",
      "Cherry Pomegranate",
      "Blackberry Lemon"
    ]
  },
  {
    "id": "iget-b5000",
    "name": "IGET B5000",
    "category": "IGET B5000",
    "price": 69.95,
    "image": "images/iget-b5000.jpg",
    "description": "5000+ puff rechargeable vape, premium plastic build, ergonomic mouthpiece, USB-C charging, 500 mAh battery.",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Blueberry Raspberry Lemon",
      "Blueberry Razz",
      "Cherry Cola",
      "Double Apple Ice",
      "Green Plum Ice",
      "Lychee Blackcurrant",
      "Mountain Spring Mint",
      "Orange Grapefruit Lemon"
    ]
  },
  {
    "id": "iget-bar-3pack",
    "name": "IGET Bar 3500 Puffs \u2014 3 Pack",
    "category": "IGET Bar",
    "price": 169.96,
    "image": "images/iget-bar-3pack.jpg",
    "description": ""
  },
  {
    "id": "iget-bar-5pack",
    "name": "IGET Bar 3500 Puffs \u2014 5 Pack",
    "category": "IGET Bar",
    "price": 269.95,
    "image": "images/iget-bar-5pack.jpg",
    "description": ""
  },
  {
    "id": "iget-bar-10pack",
    "name": "IGET Bar 3500 Puffs \u2014 10 Pack",
    "category": "IGET Bar",
    "price": 519.95,
    "image": "images/iget-bar-10pack.jpg",
    "description": ""
  },
  {
    "id": "iget-bar-20pack",
    "name": "IGET Bar 3500 Puffs \u2014 20 Pack",
    "category": "IGET Bar",
    "price": 999.95,
    "image": "images/iget-bar-20pack.jpg",
    "description": ""
  },
  {
    "id": "iget-bar",
    "name": "IGET Bar",
    "category": "IGET Bar",
    "price": 59.95,
    "image": "images/iget-bar.jpg",
    "description": "3500+ puff disposable pod device \u2014 the largest disposable vape made, amazing flavour, largest capacity.",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Cherry Pomegranate",
      "Cherry Blueberry",
      "Blueberry Raspberry",
      "Blueberry Ice",
      "Blackberry Raspberry Lemon",
      "Blackberry Pomegranate Cherry Ice",
      "Blackberry Ice",
      "Banana Pomegranate Cherry Ice",
      "Banana Ice"
    ]
  },
  {
    "id": "iget-bar-plus-6000",
    "name": "IGET Bar Plus \u2014 6000 Puffs",
    "category": "IGET Bar Plus 6000",
    "price": 65.0,
    "image": "images/iget-bar-plus-6000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Apple Grape Ice",
      "Banana Ice",
      "Black Forest",
      "Blueberry Raspberry Bubble Gum",
      "Cherry Pomegranate",
      "Cola Ice",
      "Double Apple",
      "Grape Ice"
    ]
  },
  {
    "id": "iget-bar-plus-pods-6000",
    "name": "IGET Bar Plus \u2014 Pod Only (No Battery Base) \u2014 6000 Puffs",
    "category": "IGET Bar Plus Pods 6000",
    "price": 33.0,
    "image": "images/iget-bar-plus-pods-6000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "priceVariants": [
      {
        "label": "Apple Grape Ice",
        "price": 33.0
      },
      {
        "label": "Banana Ice",
        "price": 50.0
      },
      {
        "label": "Black Forest",
        "price": 33.0
      },
      {
        "label": "Blueberry Raspberry Bubble Gum",
        "price": 33.0
      },
      {
        "label": "Cherry Pomegranate",
        "price": 50.0
      },
      {
        "label": "Double Apple",
        "price": 50.0
      },
      {
        "label": "Grape Ice",
        "price": 33.0
      }
    ]
  },
  {
    "id": "iget-goat-5000-3pack",
    "name": "IGET Goat 5000 Puffs \u2014 3 Pack",
    "category": "IGET Goat 5000",
    "price": 180.0,
    "image": "images/iget-goat-5000-3pack.jpg",
    "description": ""
  },
  {
    "id": "iget-goat-5000-5pack",
    "name": "IGET Goat 5000 Puffs \u2014 5 Pack",
    "category": "IGET Goat 5000",
    "price": 300.0,
    "image": "images/iget-goat-5000-5pack.jpg",
    "description": ""
  },
  {
    "id": "iget-goat-5000-10pack",
    "name": "IGET Goat 5000 Puffs \u2014 10 Pack",
    "category": "IGET Goat 5000",
    "price": 600.0,
    "image": "images/iget-goat-5000-10pack.jpg",
    "description": ""
  },
  {
    "id": "iget-goat-5000-20pack",
    "name": "IGET Goat 5000 Puffs \u2014 20 Pack",
    "category": "IGET Goat 5000",
    "price": 1200.0,
    "image": "images/iget-goat-5000-20pack.jpg",
    "description": ""
  },
  {
    "id": "iget-goat-5000",
    "name": "IGET Goat",
    "category": "IGET Goat 5000",
    "price": 45.0,
    "image": "images/iget-goat-5000.jpg",
    "description": "5000+ puff disposable with adjustable airflow for full control over your draw.",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Mango Berry Ice",
      "Lush Ice",
      "Fruit Gummy",
      "Energy Rush",
      "Double Apple Lime",
      "Cherry Ice",
      "Blueberry Raspberry Lemon",
      "Blackberry Raspberry Ice",
      "Aloe Grape"
    ],
    "note": "Two listings for this product had different prices ($69.95 / $49.95 vs $45.00) \u2014 the $45.00 pricing was used as the more complete/recent listing. Confirm and adjust if needed."
  },
  {
    "id": "iget-hot-3pack",
    "name": "IGET Hot 5500 Puffs \u2014 3 Pack",
    "category": "IGET Hot",
    "price": 147.95,
    "image": "images/iget-hot-3pack.jpg",
    "description": ""
  },
  {
    "id": "iget-hot-5pack",
    "name": "IGET Hot 5500 Puffs \u2014 5 Pack",
    "category": "IGET Hot",
    "price": 234.95,
    "image": "images/iget-hot-5pack.jpg",
    "description": ""
  },
  {
    "id": "iget-hot-20pack",
    "name": "IGET Hot 5500 Puffs \u2014 20 Pack",
    "category": "IGET Hot",
    "price": 820.0,
    "image": "images/iget-hot-20pack.jpg",
    "description": ""
  },
  {
    "id": "iget-hot",
    "name": "IGET Hot",
    "category": "IGET Hot",
    "price": 49.95,
    "image": "images/iget-hot.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Watermelon Kiwi",
      "Strawberry Watermelon Ice",
      "Peach Ice",
      "Double Apple Ice",
      "Blueberry Watermelon",
      "Blueberry Ice"
    ]
  },
  {
    "id": "iget-king",
    "name": "IGET King",
    "category": "IGET King",
    "price": 49.95,
    "image": "images/iget-king.jpg",
    "description": "Slim disposable vape, 2600+ puff capacity, clear atomiser tank shows remaining life.",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Energy Drink",
      "Double Apple",
      "Cool Peach",
      "Cola Ice",
      "Blueberry Raspberry Ice",
      "Blueberry Blackcurrant",
      "Blackberry Raspberry Ice",
      "Blackberry Ice",
      "Banana Dragon Fruit"
    ]
  },
  {
    "id": "iget-legend",
    "name": "IGET Legend",
    "category": "IGET Legend",
    "price": 64.95,
    "image": "images/iget-legend.jpg",
    "description": "4000+ puff disposable with an aluminium body preserving flavour to a high standard.",
    "optionLabel": "Flavor",
    "priceVariants": [
      {
        "label": "Orange Melon Lemon",
        "price": 64.95
      },
      {
        "label": "Mango Banana Ice",
        "price": 64.95
      },
      {
        "label": "Lush Ice",
        "price": 65.74
      },
      {
        "label": "Grape Ice",
        "price": 64.95
      },
      {
        "label": "Cola Lemon Soda",
        "price": 64.95
      },
      {
        "label": "Blueberry Raspberry Grape Ice",
        "price": 64.95
      },
      {
        "label": "Blueberry Blackberry Ice",
        "price": 64.95
      },
      {
        "label": "Blackberry Ice",
        "price": 64.95
      },
      {
        "label": "Aloe Mango Cantaloupe",
        "price": 64.95
      }
    ]
  },
  {
    "id": "iget-max",
    "name": "IGET Max",
    "category": "IGET Max",
    "price": 44.95,
    "image": "images/iget-max.jpg",
    "description": "Light stainless-steel disposable, 8ml e-liquid, 950mAh battery, up to 2200+ puffs.",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Passion Fruit Ice",
      "Mint King",
      "Mango Guava Ice",
      "Lush Ice",
      "Grape Ice",
      "Grape Berry Ice",
      "Blueberry Ice",
      "Blackberry Raspberry Ice",
      "Blackberry Ice"
    ]
  },
  {
    "id": "iget-mega",
    "name": "IGET Mega",
    "category": "IGET Mega",
    "price": 54.95,
    "image": "images/iget-mega.jpg",
    "description": "3000+ puff disposable pod device \u2014 largest capacity, amazing flavour.",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Kiwi Pomegranate",
      "Grape Ice",
      "Golden Tobacco",
      "Energy Drink",
      "Cherry Cola",
      "Blueberry Ice",
      "Blackberry Raspberry Ice",
      "Blackberry Ice",
      "Banana Ice"
    ]
  },
  {
    "id": "iget-moon-5000-3pack",
    "name": "IGET Moon 5000 Puffs \u2014 3 Pack",
    "category": "IGET Moon 5000",
    "price": 173.95,
    "image": "images/iget-moon-5000-3pack.jpg",
    "description": ""
  },
  {
    "id": "iget-moon-5000-20pack",
    "name": "IGET Moon 5000 Puffs \u2014 20 Pack",
    "category": "IGET Moon 5000",
    "price": 999.99,
    "image": "images/iget-moon-5000-20pack.jpg",
    "description": ""
  },
  {
    "id": "iget-moon-5000",
    "name": "IGET Moon",
    "category": "IGET Moon 5000",
    "price": 64.95,
    "image": "images/iget-moon-5000.jpg",
    "description": "",
    "optionLabel": "Flavor",
    "flavorOptions": [
      "Strawberry Orange Green Ice",
      "Pineapple Kiwi Ice",
      "Pineapple Coconut",
      "Cherry Snow Pea Ice"
    ]
  },
  {
    "id": "alp-nicotine-pouches",
    "name": "ALP Nicotine Pouches",
    "category": "Nicotine Pouches",
    "price": 4.99,
    "image": "images/alp-nicotine-pouches.jpg",
    "description": "",
    "optionLabel": "Strength",
    "flavorOptions": [
      "3mg",
      "6mg",
      "9mg"
    ]
  },
  {
    "id": "lucy-nicotine-pouches",
    "name": "Lucy Nicotine Pouches",
    "category": "Nicotine Pouches",
    "price": 5.25,
    "image": "images/lucy-nicotine-pouches.jpg",
    "description": "",
    "optionLabel": "Pack Size",
    "priceVariants": [
      {
        "label": "Small Pack",
        "price": 5.25
      },
      {
        "label": "Large Pack",
        "price": 25.99
      }
    ],
    "note": "Listed as a $5.25\u2013$25.99 range without exact tier breakdown \u2014 confirm real pack sizes/prices."
  },
  {
    "id": "sea-nicotine-pouches",
    "name": "Sea Nicotine Pouches",
    "category": "Nicotine Pouches",
    "price": 4.5,
    "image": "images/sea-nicotine-pouches.jpg",
    "description": "",
    "optionLabel": "Pack Size",
    "priceVariants": [
      {
        "label": "Small Pack",
        "price": 4.5
      },
      {
        "label": "Large Pack",
        "price": 35.99
      }
    ],
    "note": "Listed as a $4.50\u2013$35.99 range without exact tier breakdown \u2014 confirm real pack sizes/prices."
  },
  {
    "id": "niq-nicotine-pouches-9mg",
    "name": "NIQ Nicotine Pouches \u2014 9mg",
    "category": "Nicotine Pouches",
    "price": 3.99,
    "image": "images/niq-nicotine-pouches-9mg.jpg",
    "description": "",
    "optionLabel": "Pack Size",
    "priceVariants": [
      {
        "label": "Small Pack",
        "price": 3.99
      },
      {
        "label": "Large Pack",
        "price": 30.99
      }
    ],
    "note": "Listed as a $3.99\u2013$30.99 range without exact tier breakdown \u2014 confirm real pack sizes/prices."
  },
  {
    "id": "smok-nord-5-kit",
    "name": "Smok Nord 5 Kit",
    "category": "Open Pod Systems",
    "price": 39.99,
    "image": "images/smok-nord-5-kit.jpg",
    "description": ""
  },
  {
    "id": "smok-rpm-3-coils-5pack",
    "name": "Smok RPM 3 Coils \u2014 5 Pack",
    "category": "Open Pod Systems",
    "price": 18.5,
    "image": "images/smok-rpm-3-coils-5pack.jpg",
    "description": ""
  },
  {
    "id": "uwell-caliburn-g3-pro-koko",
    "name": "Uwell Caliburn G3 Pro Koko Pod System",
    "category": "Open Pod Systems",
    "price": 32.99,
    "image": "images/uwell-caliburn-g3-pro-koko.jpg",
    "description": ""
  },
  {
    "id": "vaporesso-xros-4-nano",
    "name": "Vaporesso Xros 4 Nano Pod System",
    "category": "Open Pod Systems",
    "price": 36.99,
    "image": "images/vaporesso-xros-4-nano.jpg",
    "description": ""
  },
  {
    "id": "vaporesso-xros-pro",
    "name": "Vaporesso Xros Pro Pod System",
    "category": "Open Pod Systems",
    "price": 27.99,
    "image": "images/vaporesso-xros-pro.jpg",
    "description": ""
  }
];

/* Category summary, e.g. [{name:"Disposable Vapes", count:8}, ...] sorted A-Z */
function getCategorySummary() {
  const counts = {};
  PRODUCTS.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
  return Object.keys(counts)
    .sort((a, b) => a.localeCompare(b))
    .map(name => ({ name, count: counts[name] }));
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

/* True if the customer must choose an option (flavor/colour/strength/etc) before adding to cart */
function hasChoice(product) {
  return (product.priceVariants && product.priceVariants.length > 0) ||
         (product.flavorOptions && product.flavorOptions.length > 1);
}

/* Lowest price to display — for priceVariants products this is the cheapest option */
function displayPrice(product) {
  if (product.priceVariants && product.priceVariants.length > 0) {
    return Math.min(...product.priceVariants.map(v => v.price));
  }
  return product.price;
}

/* Unit price for a specific chosen option label (or base price if no option/variants) */
function priceForOption(product, optionValue) {
  if (product.priceVariants && product.priceVariants.length > 0) {
    const match = product.priceVariants.find(v => v.label === optionValue);
    return match ? match.price : displayPrice(product);
  }
  return product.price;
}

/* Shared "onerror" attribute string — falls back to the placeholder image
   if a product photo hasn't been added yet, and prevents infinite loop if
   the placeholder itself is also missing. */
const IMG_FALLBACK = `onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='images/product-placeholder.jpg';}"`;

/* Shared product card markup, used on Home and Shop pages */
function productCardHTML(product) {
  const price = displayPrice(product);
  const priceLabel = hasChoice(product) ? `From $${price.toFixed(2)} AUD` : `$${price.toFixed(2)} AUD`;
  const wasPrice = product.originalPrice
    ? `<span style="text-decoration:line-through;color:var(--text-secondary);margin-right:6px;">$${product.originalPrice.toFixed(2)}</span>`
    : "";

  const actionButton = hasChoice(product)
    ? `<a href="shop.html?product=${product.id}" class="btn btn-block">Select Options</a>`
    : `<button class="btn btn-block" onclick="addToCart('${product.id}', 1, null); this.textContent='Added';">Add to Cart</button>`;

  const choiceList = product.priceVariants && product.priceVariants.length > 0
    ? product.priceVariants.map(v => v.label)
    : (product.flavorOptions || []);
  let infoText = product.description || "";
  if (!infoText && choiceList.length > 0) {
    const label = product.optionLabel || "Flavor";
    const preview = choiceList.slice(0, 3).join(", ");
    const more = choiceList.length > 3 ? ` +${choiceList.length - 3} more` : "";
    infoText = `${label}s: ${preview}${more}`;
  } else if (!infoText) {
    infoText = `${product.category} product.`;
  }
  const descSnippet = `<div class="card-desc">${infoText.length > 90 ? infoText.slice(0, 88) + "…" : infoText}</div>`;

  return `
    <article class="card" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
      <a href="shop.html?product=${product.id}">
        <div class="card-media"><img src="${product.image}" alt="${product.name}" loading="lazy" ${IMG_FALLBACK}></div>
        <div class="card-name">${product.name}</div>
      </a>
      ${descSnippet}
      <div class="card-price">${wasPrice}${priceLabel}</div>
      ${actionButton}
    </article>
  `;
}

/* ==========================================================================
   SEO helpers — used both by the client (harmless, unused there) and by
   the server-side rendering function (api/shop.js) to build unique,
   crawlable title/meta/H1/JSON-LD content per product and category.
   ========================================================================== */

const KNOWN_BRANDS = [
  "IGET", "Alfakher", "Alibarbar", "Bang", "Gunnpod", "HQD", "Cartisan", "Adalya",
  "Brisk Bar", "Chapo", "Dope", "GOAT", "JUUL", "Groo Max", "Smok", "Uwell",
  "Vaporesso", "Mosa", "Supremewhip", "Beco", "Beri", "Cali", "Dinner Lady",
  "Dork Bar", "ALP", "Lucy", "Sea", "NIQ", "Fresh Farms", "Fruitia",
  "Monster Vape Labs", "Adjust"
];

function detectBrand(product) {
  const name = product.name;
  const match = KNOWN_BRANDS.find(b => name.toLowerCase().startsWith(b.toLowerCase()));
  return match || "Australia Vape District";
}

function seoTitleForProduct(product) {
  return `${product.name} | Australia Vape District`;
}

function seoDescriptionForProduct(product) {
  const base = product.description ||
    `Buy ${product.name} online in Australia. Part of our ${product.category} range at Australia Vape District — fast shipping, secure checkout.`;
  return base.length > 155 ? base.slice(0, 152) + "..." : base;
}

function seoTitleForCategory(category) {
  return `${category} Australia | Australia Vape District`;
}

function seoDescriptionForCategory(category, count) {
  return `Shop ${category} online in Australia. Browse ${count} product${count === 1 ? "" : "s"} in our ${category} range at Australia Vape District — fast shipping, secure checkout.`;
}

/* JSON-LD Product structured data object for a given product */
function productJsonLd(product, baseUrl) {
  const choiceList = product.priceVariants && product.priceVariants.length > 0
    ? product.priceVariants.map(v => v.label)
    : (product.flavorOptions || []);
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [`${baseUrl}/${product.image}`],
    description: seoDescriptionForProduct(product),
    brand: { "@type": "Brand", name: detectBrand(product) },
    sku: product.id,
    ...(choiceList.length > 0 ? { additionalProperty: [{ "@type": "PropertyValue", name: product.optionLabel || "Flavor", value: choiceList.join(", ") }] } : {}),
    offers: {
      "@type": "Offer",
      url: `${baseUrl}/shop.html?product=${encodeURIComponent(product.id)}`,
      priceCurrency: "AUD",
      price: displayPrice(product).toFixed(2),
      availability: "https://schema.org/InStock"
    }
  };
}

/* Server-rendered (and client-safe) HTML for the product detail body —
   crawlable name/brand/price/availability/options/description content. */
function productDetailServerHTML(product) {
  const choiceList = product.priceVariants && product.priceVariants.length > 0
    ? product.priceVariants.map(v => v.label)
    : (product.flavorOptions || []);
  const price = displayPrice(product);
  const priceLabel = hasChoice(product) ? `From $${price.toFixed(2)} AUD` : `$${price.toFixed(2)} AUD`;
  const brand = detectBrand(product);

  const optionsHTML = choiceList.length > 0
    ? `<div class="mt-2"><strong>${product.optionLabel || "Flavor"} options:</strong> ${choiceList.map(escapeHtmlSSR).join(", ")}</div>`
    : "";

  return `
    <div class="product-detail-media">
      <img src="${product.image}" alt="${escapeHtmlSSR(product.name)}" ${IMG_FALLBACK}>
    </div>
    <div class="product-detail-info">
      <span class="eyebrow">${escapeHtmlSSR(product.category)}</span>
      <h1>${escapeHtmlSSR(product.name)}</h1>
      <p class="small mt-1">Brand: ${escapeHtmlSSR(brand)} · Availability: In Stock</p>
      <p class="lead mt-2">${escapeHtmlSSR(product.description || `A ${product.category.toLowerCase()} product from our range.`)}</p>
      ${optionsHTML}
      <div class="product-detail-price mt-2" id="detailPrice">${priceLabel}</div>
      <button class="btn btn-solid mt-2" id="addToCartDetail" data-product-id="${product.id}">Add to Cart</button>
    </div>
  `;
}

function escapeHtmlSSR(value) {
  if (value == null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PRODUCTS,
    getCategorySummary,
    getProductById,
    hasChoice,
    displayPrice,
    priceForOption,
    productCardHTML,
    detectBrand,
    seoTitleForProduct,
    seoDescriptionForProduct,
    seoTitleForCategory,
    seoDescriptionForCategory,
    productJsonLd,
    productDetailServerHTML,
    escapeHtmlSSR
  };
}