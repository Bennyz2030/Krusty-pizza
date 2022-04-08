function Order(topping1, topping2, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;
  this.price = 0;
}

Order.prototype.pizzaSize = function() {
  let zaSize = this.size;

  if (zaSize === "small") {
    this.price += 10;
  }
  return this.price;
}

Order.prototype.pizzaToppings = function() {
  let toppingOne = this.topping1;
  let toppingTwo = this.topping2;

  if (toppingOne === "1") {
    this.price += 4;
  } else if (toppingOne === "2") {
    this.price+= 2;
  } else if (toppingOne === "3") {
    this.price += 1000;
  } else if (toppingOne === "4") {
    this.price += 0;
  }
  if (toppingTwo === "1") {
    this.price += 4;
  } else if (toppingTwo === "2") {
    this.price+= 2;
  } else if (toppingTwo === "3") {
    this.price += 1000;
  } else if (toppingTwo === "4") {
    this.price += 0;
  }
  return this.price;
}