function Pizza() {
  this.sauce = "tomato"
  this.crust = "regular"
  this.toppings = [];
  this.price = 0;
}
Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping)
}
Pizza.prototype.changeSauce(sauce) = function (sauce) {
  this.sauce = sauce
}
Pizza.prototype.changeCrust(sauce) = function (crust) {
  this.crust = crust
}


$(document).ready(() => {
  var myPizza = new Pizza()
  $("form#order").submit(event => {
    event.preventDeafult()
    $("input:checkbox[name=topping]:checked").each(() => {
      myPizza.addTopping($(this).val())
    })
    console.log(myPizza);

  })
})
