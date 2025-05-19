    function toggleMenu() {
      document.getElementById('menu').classList.toggle('active');
    }
function loadCart() {
      const cartItemsContainer = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cartItemsContainer.innerHTML = '';

      let total = 0;

      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Ваш кошик порожній.</p>';
      }

      cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
          <div class="cart-item-info">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-name">${item.name}</div>
          </div>
          <div class="cart-item-price">${item.price} грн</div>
        `;
        cartItemsContainer.appendChild(itemEl);
        total += parseFloat(item.price);
      });

      cartTotal.textContent = `Загальна сума: ${total.toFixed(2)} грн`;
    }

    document.addEventListener('DOMContentLoaded', loadCart);
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = parseFloat(button.getAttribute("data-price"));

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ name, price });
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Товар додано в кошик!");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceContainer = document.getElementById("total-price");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<li>Ваш кошик порожній</li>";
    totalPriceContainer.textContent = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} — ₴${item.price} <button onclick="removeItem(${index})">Видалити</button>`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  totalPriceContainer.textContent = `Загальна сума: ₴${total}`;
});

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload(); // оновити сторінку
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
