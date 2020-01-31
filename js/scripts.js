function Pizza() {
  this.toppings = [];
  this.price = 0;
}
Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping)
}