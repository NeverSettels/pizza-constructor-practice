function Order() {
  this.pizzas = [];
  this.orderTotal = 0;
}
Order.prototype.getTotal = function () {
  this.pizzas.forEach(pizza => {
    this.orderTotal += pizza.price
  })
}
Order.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza)
}
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
  })
})
