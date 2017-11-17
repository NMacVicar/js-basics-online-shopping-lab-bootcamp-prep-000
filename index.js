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
  } else{
    s = "In your cart, you have "
    for (var i = 0; i < cart.length - 1; i++){
      s += ""
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
