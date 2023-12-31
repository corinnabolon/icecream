// SECTION global variables
const iceCream = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]

let cheeseCake = { name: 'cheese cake', quantity: 0, price: 5.00 }
// the objects in these arrays of objects do have names, they're just toppings[0] or whatever
//another way to do it is give it a variable name like above, and just add  that to the array, though there is no particular reason to do that
//the "shop" object below is saved into a variable, and often is called a dictionary because it includes a lot of things in it we can reference

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Cookie Chunks',
  price: .5,
  quantity: 0
},
  cheeseCake
]

//we can use shop.toppings[0].name or shop["toppings"][0].name <--this lets us use it in a function if we want to pass in a parameter which can be either toppings or iceCream

const shop = {
  toppings: [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
  },
  {
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
  },
  {
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
  }],

  iceCream: [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
  },
  {
    name: 'Vanilla',
    price: 1,
    quantity: 0
  },
  {
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
  }]
}

// !SECTION

// SECTION functions

// function orderVanilla() {
//   console.log("ordering vanilla")
//   let orderedVanilla = iceCream.find(flavor => flavor.name == "Vanilla")
//   console.log(orderedVanilla.quantity)
//   orderedVanilla.quantity++
//   console.log(iceCream)
// }

function order(flavor) {
  let orderedFlavor = iceCream.find(kind => kind.name == flavor)
  if (orderedFlavor) {
    orderedFlavor.quantity++
  }
  let orderedTopping = toppings.find(kind => kind.name == flavor)
  if (orderedTopping) {
    orderedTopping.quantity++
  }
  drawCost()
}

// function order(type, flavor) {
//   let order = shop[type].find(kind => kind.name == flavor)
//   console.log(order)
//   if (order) {
//     order.quantity++
//   }
//   drawCost()
// }


function calcCost() {
  let cost = 0
  iceCream.forEach(kind => cost += (kind.price * kind.quantity))
  toppings.forEach(kind => cost += (kind.quantity * kind.price))
  return cost
}

function drawCost() {
  let grandTotalElem = document.getElementById("grandTotal")
  grandTotalElem.innerText = calcCost().toFixed(2)
  drawCart()
}

function drawCart() {
  let cartContent = ""
  iceCream.forEach(kind => {
    if (kind.quantity > 0) {
      let kindPrice = (kind.quantity * kind.price).toFixed(2)
      cartContent += `<div class="col-6">
        <p>${kind.name}</p>
      </div>
      <div class="col-2">
        <p>${kind.quantity}</p>
      </div>
      <div class="col-2">
        <p>$${kind.price}</p>
      </div>
      <div class="col-2">
        <p>$${kindPrice}</p>
      </div>`
    }
  })
  toppings.forEach(kind => {
    if (kind.quantity > 0) {
      let kindPrice = (kind.quantity * kind.price).toFixed(2)
      cartContent += `<div class="col-6">
      <p>${kind.name}</p>
    </div>
    <div class="col-2">
      <p>${kind.quantity}</p>
    </div>
    <div class="col-2">
      <p>$${kind.price}</p>
    </div>
    <div class="col-2">
      <p>$${kindPrice}</p>
    </div>`

    }

  })
  let cartElem = document.getElementById("cart")
  cartElem.innerHTML = cartContent
}

function checkout() {

  Swal.fire({
    title: 'Are you sure you want to check out?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: `Yes, that's all!`
  }).then((result) => {
    if (!result.isConfirmed) {
      return
    }

    Swal.fire(
      'Okay!',
      'Your ice cream is on its way!',
      'success'
    )

    iceCream.forEach(kind => kind.quantity = 0)
    drawCost()
  })
}

// !SECTION


// SECTION function calls

//!SECTION