function Pizza() {
  this.sauce = "tomato"
  this.crust = "regular"
  this.toppings = [];
  this.price = 0;
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


$(document).ready(function () {
  var myPizza = new Pizza()
  $("form#order").submit(function (event) {
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function () {
      myPizza.addTopping($(this).val())
    })
    console.log(myPizza);

  })
})
