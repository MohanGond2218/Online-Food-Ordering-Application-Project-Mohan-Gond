// Sample menu data (you can replace this with actual data from a server via AJAX)
const menuData = [
  { id: 1, name: "Butter Chicken", price: 299.99 },
  { id: 2, name: "Paneer Tikka", price: 199.99 },
  { id: 3, name: "Chicken Biryani", price: 249.99 },
  { id: 4, name: "Masala Dosa", price: 99.99 },
  { id: 5, name: "Samosa", price: 49.99 },
  { id: 6, name: "Chole Bhature", price: 129.99 },
  { id: 7, name: "Rajma Chawal", price: 149.99 },
  { id: 8, name: "Mutton Rogan Josh", price: 349.99 },
  { id: 9, name: "Vegetable Pulao", price: 129.99 },
  { id: 10, name: "Gulab Jamun", price: 79.99 },
];

// Cart array to hold selected items
let cart = [];

// Function to dynamically load menu items
function loadMenu() {
  const menuItemsDiv = document.getElementById("menuItems");

  menuData.forEach((item) => {
    const menuItem = `
        <div class="col-sm-6 col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">₹${item.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart(${
                      item.id
                    })">Add to Cart</button>
                </div>
            </div>
        </div>
        `;
    menuItemsDiv.innerHTML += menuItem;
  });
}

// Function to add item to the cart
function addToCart(itemId) {
  const item = menuData.find((menuItem) => menuItem.id === itemId);
  cart.push(item);
  updateCart();
}

// Function to update cart display
function updateCart() {
  const cartItemsDiv = document.getElementById("cartItems");
  const checkoutBtn = document.getElementById("checkoutBtn");

  cartItemsDiv.innerHTML = "";

  if (cart.length > 0) {
    let total = 0;
    cart.forEach((item) => {
      cartItemsDiv.innerHTML += `<p>${item.name} - ₹${item.price.toFixed(
        2
      )}</p>`;
      total += item.price;
    });
    cartItemsDiv.innerHTML += `<hr><p>Total: ₹${total.toFixed(2)}</p>`;
    checkoutBtn.classList.remove("d-none");
  } else {
    cartItemsDiv.innerHTML = "<p>Your cart is empty</p>";
    checkoutBtn.classList.add("d-none");
  }
}

// Load the menu when the page loads
document.addEventListener("DOMContentLoaded", loadMenu);
