const range = <HTMLInputElement>document.querySelector(".range");
const price = <HTMLHeadingElement>document.querySelector("h2");
const pageview = <HTMLParagraphElement>document.querySelector(".pageviews");
const toggleBilling = <HTMLInputElement>document.querySelector(".switch input");
let yearlyDiscount: boolean = toggleBilling.checked;
let currentPageview: string = "100K";
range.addEventListener("change", pricing);

toggleBilling.addEventListener("input", function () {
  this.checked = !yearlyDiscount;
  yearlyDiscount = this.checked;
  pricing();
});

function pricing() {
  const min: number = Number(range.min);
  const max: number = Number(range.max);
  const val: number = Number(range.value);

  range.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";

  let priceRange: any = Number(range.value).toFixed(2);
  priceRange = !yearlyDiscount ? priceRange : priceRange / 0.25;
  currentPageview = !yearlyDiscount
    ? String(Math.ceil(priceRange * 6.25))
    : String(Math.ceil((priceRange * 6.25) / 0.25));
  pageview.firstChild
    ? (pageview.firstChild.nodeValue = `${currentPageview}K `)
    : null;
  price.firstChild ? (price.firstChild.nodeValue = `$${priceRange}`) : null;
}
