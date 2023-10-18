let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

console.log(rabbit.eats); // true
