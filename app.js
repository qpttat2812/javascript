//============variables==============
// console.log(4564);
// console.log("i love javascript!");
// const a = 5;
// const b = 7;
// console.log(a + b);
// console.log(a * b);
// console.log(a - b);
// let myName = "quynh";
// console.log("My name is " + myName);
// myName = "quynhpham";
// console.log("My name is " + myName);
// const amIFat = null;
// let something;
// console.log(something);
//=====================================
//============array====================
// const daysOfWeek = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
// console.log(daysOfWeek[5]);
// daysOfWeek.push("hello");
// console.log(daysOfWeek);
//======================================
//=============object==================
// const player = {
//     name: "alex",
//     point: 10,
//     isFat: false,
//     isPlayGood: true
// }

// console.log(player.name);
// console.log(player["isFat"]);

// player.sayHi = "hello";
// console.log(player);
// player.point = player.point + 20;
// console.log(player.point);
//====================function=============
// function plus(a, b){
//     console.log(a+b);
// }

// function hello(myName, age){
//     console.log("hi! my name is " + myName + " and I'm " + age);
// }

// plus(4, 5);
// hello("brit", 10);

// const player = {
//     name: "quynh",
//     sayHello: function(otherPersons){
//         console.log("hello, my name is " + otherPersons);
//     }
// }

// console.log(player.name);
// player.sayHello("nico");

// const toBuy = ["potato", "kiwi", "apple"];
// toBuy.push("banana");
// console.log(toBuy);
// player.age = 20;
// console.log(player);
//====================return=================
// const calculator = {
//     plus: function(a, b){
//         return (a+b);
//     },
//     abstraction: function(a,b){
//         return (a-b);
//     },
//     multiplication: function(a, b){
//         return (a*b);
//     },
//     division: function(a,b){
//         console.log(a/b);
//     },
//     power: function(a,b){
//         return (a**b);
//     }
// }

// console.log(calculator.plus(5,6));
// console.log(calculator.abstraction(5,6));
// console.log(calculator.division(5,6));
// ==================if/else====================
// const age = parseInt(prompt("how old are you?"));

// if(isNaN(age)){
//     console.log("Please enter a number");
// }
// else if(age < 18){
//     console.log("You are too young.");
// }
// else if(age >= 18 && age <= 50){
//     console.log("You can drink");
// }
// else {
//     console.log("You should do exercise");
// }
//====================document======================
// const hehe = document.getElementById("title");
// console.dir(hehe);
// console.log(hehe.id);
// console.log(hehe.innerText);
// console.log(hehe.className);
//=================searchingselector================
const hellos = document.querySelector(".hello h1");
console.log(hellos);
console.log(hellos.innerText);
hellos.innerText = "Have a good time!";