/*2022-01-17
alert("HelloWorld!");
var a = 5;
var b = 10;
var myName = "Edoc";
console.log(123123);
console.log("Name : " + myName);
console.log(12 + 8);
console.log(a * b);*/

/*2022-01-18
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]; //Array Item
console.log(daysOfWeek);
console.log(daysOfWeek[4]); // Get intem from Array
daysOfWeek.push("sunday"); //Add more Item
console.log(daysOfWeek);

//player[0] == name
//player[1] == points
//player[2] == status
//player[3] == die
const player = ["Edoc", 123, "Good", false];

const player = {
  name: "Edoc",
  points: 123,
  status: "Good",
  die: false,
};
console.log(player);
console.log(player.name);
console.log(player["points"]);

player.status = true;
console.log(player);*/

/*2022-01-19
function sayHello(nameOfUser, age) {
  console.log("Hello! my name is " + nameOfUser + " my age is " + age);
}
sayHello("Edoc", 10);
sayHello("Man", 20);
sayHello("Human", 31);

function plus(firstNumber, secondNumeber) {
  console.log(firstNumber + secondNumeber);
}
plus(10, 8);

function divide(a, b) {
  console.log(a / b);
}
divide(30, 2);

const user = {
  name: "Edoc",
  sayHello: function (otherPersonName) {
    console.log("Hello! " + otherPersonName + " Nice to meet you!");
  },
};
console.log(user.name);
user.sayHello("Edoc");
user.sayHello("Person");*/

/*2022-01-22
const toBuy = ["tomato", "potato", "pizza"];
console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("apple");
console.log(toBuy);

const a = 5;
let isLive = true; //Variable
isLive = false;
console.log(isLive);

const player = {
  name: "Edoc",
  age: 20,
};
console.log(player);
player.name = "User";
console.log(player);
player.weight = "70";
console.log(player, console);

function plus(a, b) {
  console.log(a + b);
}
plus(1, 2);
plus(1.0, 0.2);
plus(100, 2.3);

function minusFive(x) {
  console.log(x - 5);
}
minusFive(5, 10, 12, 34, 4);

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  min: function (a, b) {
    console.log(a - b);
  },
  times: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};
calculator.add(5, 2);
calculator.min(5, 2);
calculator.times(5, 2);
calculator.div(5, 2);
calculator.powerOf(5, 2);

const age = 19;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);
*/

/*2022-01-27
const age = prompt("How old are you?");
console.log(age, parseInt(age));
console.log(typeof age, typeof parseInt(age));

const age = parseInt(prompt("How old are you?"));
console.log(age, typeof age);

const age = parseInt(prompt("How old are you?"));
if (isNaN(age)) {
  //condition == true
  console.log("Plaese write a number.");
} else {
  //condition == false
  console.log("Thank you for writing your age.");
}

const age = parseInt(prompt("How old are you?"));
if (isNaN(age) || age < 0) {
  console.log("Plaese write a number.");
} else if (age < 19) {
  console.log("You are too young.");
} else if (age === 19) {
  console.log("Wow, congratulation now you can drink!");
} else if (age >= 20 && age <= 50) {
  console.log("You can drink.");
} else if (age >= 51) {
  console.log("Stop to drink.");
} else {
  console.log("You can't drintk.");
}
*/
