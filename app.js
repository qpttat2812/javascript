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
const player = {
    name: "alex",
    point: 10,
    isFat: false,
    isPlayGood: true
}

console.log(player.name);
console.log(player["isFat"]);

player.sayHi = "hello";
console.log(player);
player.point = player.point + 20;
console.log(player.point);