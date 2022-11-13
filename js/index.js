"use strict";
const range = document.querySelector(".range");
const price = document.querySelector("h2");
console.log(range);
range.addEventListener("change", function () {
    console.log(range.value);
    price.firstChild ? (price.firstChild.nodeValue = `$${this.value}.00`) : null;
});
