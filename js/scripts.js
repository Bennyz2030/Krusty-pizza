function Order(topping1, topping2, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;
  this.price = 0;
}

Order.prototype.pizzaToppings = function() {
  let toppingOne = this.topping1;
  let toppingTwo = this.topping2;

  if (toppingOne === "pepperoni") {
    this.price += 4;
  }
  if (toppingTwo === "onion") {
    this.price += 2;
  }
  return this.price;
}