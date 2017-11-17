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
      for (var item in cart[i]){
        s += `${item} at $${cart[i][item]}, `
      }
    }
    for (var item in cart[cartLength - 1]){
      s += `and ${item} at $${cart[cartLength - 1][item]}.`
    }
    console.log(s)
  } else if (cartLength === 2){
    for (var item in cart[0]){
      s += `${item} at $${cart[0][item]} `
    }
    for (var item in cart[1]){
      s += `and ${item} at $${cart[1][item]}.`
    }
    console.log(s)
  } else {
    for (var item in cart[0]){
      s += `${item} at $${cart[0][item]}.`
    }
    console.log(s)
  }
}

function total() {
  // write your code here
  var cartTotal = 0
  for (var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      cartTotal += cart[i][item]
    }
  }
  return cartTotal
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnPropert(item)){
      cart = [...cart.splice(0, i), ...cart.splice(i + 1)]
      return cart
    }
  }
 console.log("That item is not in your cart.")
 return cart
}
  // write your code here


function placeOrder(cardNumber) {
  // write your code here
  if (){
    
  } else {
    var total = total()
    console.log(`Your total cost is ${total}`)
  }
}
