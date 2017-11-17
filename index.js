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
  let cartLength = cart.length
  let s = "In your cart, you have "
  if (cartLength === 0){
    console.log("Your shopping cart is empty.")
  } else if (cartLength >= 3){
    for (var i = 0; i < cartLength - 1; i++){
      for (item in cart[i]){
        s += `${item} at $${cart[i][item]}, `
      }
    } 
    for (item in cart[cartLength - 1]){
      s += `and ${item} at $${cart[cartLength - 1][item]}.`
    }
    console.log(s)
  } else if (cartLength === 2){
    for (item in cart[0]){
      s += `${item} at $${cart[i][item]} `
    } 
    for (item in cart[1]){
      s += `and ${item} at $${cart[cartLength - 1][item]}.`
    }
    console.log(s)
  } else {
    for (item in cart[0]){
      s += `${item} at $${cart[i][item]}.`
    }
    console.log(s)
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
