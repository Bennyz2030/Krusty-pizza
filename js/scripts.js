function Order(topping1, topping2, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;
  this.price = 0;
}

Order.prototype.pizzaSize = function() {
  let zaSize = this.size;

  if (zaSize === "Small") {
    this.price += 10;
  } else if (zaSize ==="Medium" || zaSize === "Small Gluten Free Crust") {
    this.price += 12;
  } else if (zaSize === "Large") {
    this.price += 14;
  } else if (zaSize === "Family") {
    this.price += 16;
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