import PizzaShop from "./pizza-shop.js";
import DrinkMachine from "./drink-machine.js";

const pizza = new PizzaShop();
const drink = new DrinkMachine();

pizza.on("order", (size, topping) => {
  console.log(`Order recieved! Baking a ${size} with topping ${topping}`);
  drink.serveDrink(size);
});
pizza.order("large", "mushroom");
pizza.displayOrderNumber();
