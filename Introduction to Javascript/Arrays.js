
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.join());
console.log(fruits.join('--'));

// join

// push
fruits.push("ben dover"); // pushed a string onto the array
fruits.push('Strawberry', 'Blueberry') // pushed an array on to the array
fruits.push(8)
console.log(fruits.join());
console.log(JSON.stringify(fruits));
// pop
console.log(fruits.pop());
console.log(fruits.join());
// shift
console.log(fruits.join())
console.log(fruits.shift());
console.log(fruits.join());
// unshift
console.log(fruits.unshift('Fred'))
console.log(fruits.join());

// concat
fruits = fruits.concat(['Strawberry', 'Blueberry']);
console.log(JSON.stringify(fruits))
// slice
 fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(3);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// citrus = fruits.slice(1,3);
// console.log(citrus)
// console.log(fruits)

// splice
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)
