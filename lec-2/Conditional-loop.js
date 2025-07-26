const prompt = require("prompt-sync")();

//valid voter
let age = Number(prompt("What's your age:"));
if (isNaN(age) || age < 0) {
  console.log("Please enter a valid number.");
}
if (age <= 18) {
  console.log("You are not eligibal for voting.");
} else {
  console.log("You are eligibal for voting.");
}

//shop discount
let price = Number(prompt("Enter the price of the item:"));
dis = 0;
if (isNaN(price) || price < 0) {
  console.log("Please enter a valid price.");
}
if (price > 0 && price <= 5000) {
  dis = 0;
} else if (price > 5001 && price <= 7000) {
  dis = 5;
} else if (price > 7001 && price <= 9000) {
  dis = 10;
} else if (price > 9000) {
  dis = 20;
}
console.log(price - Math.floor((dis * price) / 100));

//Bijli Bill
let units = Number(prompt("Enter the number of units consumed:"));
amount = 0;
if (isNaN(units) || units < 0) {
  console.log("Please enter a valid number of units.");
}
if (units > 400) {
  amount = (units - 400) * 13;
  units = 400;
}
if (units > 201 && units <= 400) {
  amount += (units - 200) * 8;
  units = 200;
}
if (units > 101 && units <= 200) {
  amount += (units - 100) * 6;
  units = 100;
}
units += units * 4.2;

console.log(`Total amount for ${units} units is ₹${amount.toFixed(2)}`);

let money = Number(prompt("Enter the amount of money you have:"));
if (isNaN(money) || money < 0) {
  console.log("Please enter a valid amount.");
}
if (money >= 500) {
  console.log("500 notes:" + Math.floor(money / 500));
  money = money % 500;
}
if (money >= 200) {
  console.log("200 notes:" + Math.floor(money / 200));
  money = money % 200;
}
if (money >= 100) {
  console.log("100 notes:" + Math.floor(money / 100));
  money = money % 100;
}
if (money >= 50) {
  console.log("50 notes:" + Math.floor(money / 50));
  money = money % 50;
}
if (money >= 20) {
  console.log("20 notes:" + Math.floor(money / 20));
  money = money % 20;
}
if (money >= 10) {
  console.log("10 notes:" + Math.floor(money / 10));
  money = money % 10;
}
if (money >= 5) {
  console.log("5 notes:" + Math.floor(money / 5));
  money = money % 5;
}
if (money >= 2) {
  console.log("2 notes:" + Math.floor(money / 2));
  money = money % 2;
}
if (money === 1) {
  console.log("1 notes:" + money);
}
if (money > 0) {
  console.log("Remaining amount: " + money);
}

//turnary operator
let num = Number(prompt("Enter a number:"));
if (isNaN(num)) {
  console.log("Please enter a valid number.");
}
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(`The number ${num} is ${result}.`);

//switch case
let no = 0.1 + 0.2; // Gives 0.30000000000000004
let scaled = Math.round(no * 10); // 3 (≈ 0.3 * 10)

switch (scaled) {
  case 3:
    console.log("The number is approximately 0.3");
    break;
  case 4:
    console.log("The number is approximately 0.4");
    break;
  default:
    console.log("The number is neither 0.3 nor 0.4");
    break;
}
