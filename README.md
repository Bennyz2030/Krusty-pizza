# _Krusty Krab Pizza_

#### _A web application that takes a pizza order form the user and returns their order price._

#### By _**Nick Benzinger**_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _JQuery_
* _Bootstrap_

## Description

_On this web page the user can customize the size and toppings of a pizza, and when finished will be presented with their order total._

## Setup/Installation Requirements

* Navigate to https://github.com/Bennyz2030/krusty-pizza
* Click on the green "Code" button and copy the repository URL or click on the copy button
* Open the terminal on your desktop
* Once in the terminal, use it to navigate to your desktop folder using command "cd desktop"
* Once inside your desktop folder, use the command "git clone"
* After cloning the project, navigate into it using the command "cd krusty-pizza"
* Use the command "git remote" to confirm the creation of the new local repository
* Open the project with the code editor of your choice, or navigate to the top level of the directory and open the index.html file in your web browser
* Or, open in GH Pages at https://bennyz2030.github.io/krusty-pizza/


## Known Bugs

* _No known bugs_
* _If you should find any, please contact me_

## License

_[MIT](https://opensource.org/licenses/MIT)_

## Contact Information

_nicholasbenzinger@gmail.com_



## Describe: Order();

>Test: "It should return an object with properties for pizza toppings and size."

>Code: const newOrtder = new Order("pepperoni", "onions", "small");

>Expected Output: Order { toppings: ["pepperoni", "onions"], size: "small" };
_______________________________________________________________________

## Describe: pizzaToppings();

>Test: "It should update the price of the pizza based on the topping the user selects."

>Code: let pizzaTopping = this.topping
>if (pizzaTopping === "pepperoni") this.price = 2;

>Expected Output: "2";
_________________________________________________________________________

>Test: "It should allow to user to select multiple topping and update the price accordingly."

>Code: let pizzaToppings = this.topping1 + this.topping2
> if (pizzaTopping1 === "pepperoni" && pizzaTopping2 === "onions" ) this.price = ["4"];

>Expected Output: "4";
__________________________________________________________________________

>Test: "It should return the price."

>Code: return this.price;

>Expected Output: "4";
__________________________________________________________________________

## Describe pizzaSize();

* >Test: "It should update the price besed on the size the user selects."

  >Code: let pizzaSize = this.size, if (pizzaSize === "small") this.price = 10;

  >Expected Output: "10";
  _________________________________________________________________

* >Test: "It should return the final price to the user."

  >Code: return this.price

  >Expected Output: "10";
    _______________________________________________________________
