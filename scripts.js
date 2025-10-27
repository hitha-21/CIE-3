let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} added to your cart!`);
  console.log(cart);
}

document.getElementById('checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thank you for your purchase, ${name}! Your order has been placed.`);
  cart = [];
  this.reset();
});
