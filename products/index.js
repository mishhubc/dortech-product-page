const product1Category = document.querySelector(".product1-category");
const product2Category = document.querySelector(".product2-category");
const product3Category = document.querySelector(".product3-category");
const product4Category = document.querySelector(".product4-category");
const product5Category = document.querySelector(".product5-category");
const product6Category = document.querySelector(".product6-category");

const product1 = document.querySelector("#product1");
const product2 = document.querySelector("#product2");
const product3 = document.querySelector("#product3");
const product4 = document.querySelector("#product4");
const product5 = document.querySelector("#product5");
const product6 = document.querySelector("#product6");

const handleProduct = (product, a, b, c, d, e) => {
  product.classList.remove("hide");
  a.classList.add("hide");
  b.classList.add("hide");
  c.classList.add("hide");
  d.classList.add("hide");
  e.classList.add("hide");
};

product1.addEventListener("click", (e) => {
  e.preventDefault();
  handleProduct(
    product1Category,
    product2Category,
    product3Category,
    product4Category,
    product5Category,
    product6Category
  );
});
product2.addEventListener("click", (e) => {
  e.preventDefault();
  handleProduct(
    product2Category,
    product1Category,
    product3Category,
    product4Category,
    product5Category,
    product6Category
  );
});
product3.addEventListener("click", (e) => {
  e.preventDefault();
  handleProduct(
    product3Category,
    product1Category,
    product4Category,
    product2Category,
    product5Category,
    product6Category
  );
});
product4.addEventListener("click", (e) => {
  e.preventDefault();
  handleProduct(
    product4Category,
    product3Category,
    product2Category,
    product1Category,
    product5Category,
    product6Category
  );
});

product5.addEventListener("click", (e) => {
  e.preventDefault();
  handleProduct(
    product5Category,
    product3Category,
    product2Category,
    product1Category,
    product6Category,
    product4Category
  );
});

product6.addEventListener("click", (e) => {
  e.preventDefault();
  handleProduct(
    product6Category,
    product3Category,
    product2Category,
    product1Category,
    product5Category,
    product4Category
  );
});
