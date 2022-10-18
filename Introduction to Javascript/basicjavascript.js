/*
var greeting = "Hello";

// function test(){
if (true){
    var greeting = "Hi";
}
// }
console.log(greeting);
*/
/*
let greeting = "Hello";

function test(){
if (true){
    let greeting = "Hi";
}
}
console.log(greeting);

const TEST_VALUE= 6;

TEST_VALUE = 5;
*/
/*
console.log(1=="1");
console.log(1 === '1');
console.log(1 == true);
console.log(1 === true);
console.log(typeof(1));
console.log(typeof(true));
*/
// let number1 = 6;
// let number2 = 7;
// let sum = number1+number2;
// const result = number1 +" + " + number2 + " = " + sum;

// const result2 = `${number1} + ${number2} = ${sum}`;
// console.log(result2);

// function addTwo(x){
// return x+2;
// }

// function add(x,y,z){
//     // console.log(typeof(z));

//     // if (z === undefined){
//     //     z=0;
//     // }

// return x+y+ (typeof(z) === 'undefined' ? 0 : z);
// }
// console.log(add(1,2,3))
// console.log(add(1,2))

// let num = 7; 
// // Teranary operator 
// // Condition ?true : false
// console.log(num%2==0?'even':'odd');

const colours = ["red", "yellow", "green", "blue"];
for (const colour of colours) {
   // console.log(colour)
}

const car = {make: 'Ford', model:'Mustang'};

for (const prop in car) {
    console.log(`${prop}: ${car[prop]}`);
}

console.log(car.make)
console.log(car['make']);