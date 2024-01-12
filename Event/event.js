import EventEmmiter from "events";

const emitter = new EventEmmiter();

emitter.on("order-pizza", (size, topping) => {
  console.log(`Order recieved! Baking a ${size} with topping ${topping}`);
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("Congrats you win Cold Coffee");
  }
});

emitter.emit("order-pizza", "large", "mushroom");
