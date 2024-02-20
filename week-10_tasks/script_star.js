const total = document.querySelector(".product-card__total");
const price = document.querySelector(".price").textContent;
const quantity = document.querySelector(".quantity");

function calculateTotalPrice() {
  let result = Number(price) * Number(quantity.value);
  total.textContent = `${result.toLocaleString("ru-RU")} руб.`;
}

function changeMe() {
  let catDecorImg = document.getElementById("cat_decor_pic");
  catDecorImg.src = "./images/cat_decoration.jpg";
}
