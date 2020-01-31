//Order constructor and prototypes
function Order() {
  this.pizzas = [];
  this.orderTotal = 0;
}
Order.prototype.getTotal = function () {
  this.orderTotal = 0;
  this.pizzas.forEach(pizza => {
    this.orderTotal += pizza.price
  })
}
Order.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza)
}
//Pizza constructor and prototypes
function Pizza() {
  this.sauce = "tomato"
  this.crust = "regular"
  this.toppings = [];
  this.price = 7;
}
Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping)
}
Pizza.prototype.changeSauce = function (sauce) {
  this.sauce = sauce
}
Pizza.prototype.changeCrust = function (crust) {
  this.crust = crust
}
Pizza.prototype.calcPrice = function () {
  if (this.sauce !== "Marinera") {
    this.price += 2;
  } else if (this.crust !== "Regular") {
    this.price += 2;
  }
  var toppingCost = this.toppings.length;
  this.price += toppingCost
}

//UI logic for front-end
$(document).ready(function () {
  var myOrder = new Order()
  $("form#order").submit(function (event) {
    event.preventDefault();
    var myPizza = new Pizza()
    var sauce = $("input[name='sauceRadios']:checked").val();
    var crust = $("input[name='crustRadios']:checked").val();
    myPizza.changeSauce(sauce)
    myPizza.changeCrust(crust)
    $("input:checkbox[name=topping]:checked").each(function () {
      myPizza.addTopping($(this).val())
    })
    myPizza.calcPrice()
    myOrder.addPizza(myPizza)
    myOrder.getTotal()
    console.log(myOrder);
    $("#pizzas").empty()
    $("#total").empty()
    myOrder.pizzas.forEach((pizza, i) => {
      $("#pizzas").append(`<div class="order-item"> <strong>Pizza:</strong> ${i + 1} <br> <strong>Crust:</strong> ${pizza.crust} <br> <strong> Sauce:</strong> ${pizza.sauce}<br> <strong>Toppings: </strong>${pizza.toppings} <br> <strong>Price:</strong> $${pizza.price}`)
    })
    $("#total").append(`<h3> <strong> Your Total: </strong> $${myOrder.orderTotal}</h3>`)
  })
})
