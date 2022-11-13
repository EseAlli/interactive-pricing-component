"use strict";
const range = document.querySelector(".range");
const price = document.querySelector("h2");
const pageview = document.querySelector(".pageviews");
const toggleBilling = document.querySelector(".switch input");
let yearlyDiscount = toggleBilling.checked;
let currentPageview = "100K";
range.addEventListener("change", pricing);
toggleBilling.addEventListener("input", function () {
    this.checked = !yearlyDiscount;
    yearlyDiscount = this.checked;
    pricing();
});
function pricing() {
    const min = Number(range.min);
    const max = Number(range.max);
    const val = Number(range.value);
    range.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    let priceRange = Number(range.value).toFixed(2);
    priceRange = !yearlyDiscount ? priceRange : priceRange / 0.25;
    currentPageview = !yearlyDiscount
        ? String(Math.ceil(priceRange * 6.25))
        : String(Math.ceil((priceRange * 6.25) / 0.25));
    pageview.firstChild
        ? (pageview.firstChild.nodeValue = `${currentPageview}K `)
        : null;
    price.firstChild ? (price.firstChild.nodeValue = `$${priceRange}`) : null;
}
