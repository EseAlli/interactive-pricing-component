const range = <HTMLInputElement>document.querySelector(".range");
const price = <HTMLHeadingElement>document.querySelector("h2");
const pageview = <HTMLParagraphElement>document.querySelector(".pageviews");
const toggleBilling = <HTMLInputElement>document.querySelector(".switch input");
let yearlyDiscount: boolean = toggleBilling.checked;
let currentPageview: string = "100K";
range.addEventListener("change", pricing);

toggleBilling.addEventListener("click", function () {
  this.checked = !yearlyDiscount;
  yearlyDiscount = this.checked;
});

function pricing() {
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
