var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 itemPair = Object()
 itemPair[item] = Math.floor(100 * Math.random())
 cart.push(itemPair)
 console.log(`${item} has been added to your cart.`)
 return cart

}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else if (cart.length) >= 3{
    s = "In your cart, you have "
    for (var i = 0; i < cart.length - 1; i++){
      for (item in cart[i]){
        s += `${item} at $${cart[i][item]}, `
      }
    for (item in cart[cart.length - 1]){
      s += `and ${item} at $${cart[cart.length - 1][item]}.`
    }
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
