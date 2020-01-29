// SECTION ONE - CONDITIONALS
// create secretNumber
// var secretNumber = 4;

// //ask user for guess
// var guess = prompt("Guess a number");

// //check if guess is right
// if (Number(guess) === secretNumber) {
//   alert("YOU GOT IT RIGHT!");
// }

// //check if guess is higher
// else if (Number(guess) > secretNumber) {
//   alert("Too high. Guess again...");
// }

// //otherwise, check if lower
// else {
//   alert("Too low. Guess again...");
// }

// //SECTION TWO - LOOPS
// // Print all numbers between -10 & 19
// console.log("Printing all numbers between -10 & 19");
// var counter = -10;

// while (counter < 20) {
//   console.log(counter);
//   counter++;
// }

// //Print all even numbers between 10 & 40
// console.log("Printing all even numbers between 10 & 40");
// var counter = 10;

// while (counter <= 40) {
//   console.log(counter);
//   counter += 2;
// }

// //Print all odd numbers between 300 & 333
// console.log("Printing all odd numbers between 300 & 333");
// var counter = 300;

// while (counter <= 333) {
//   if (counter % 2 !== 0) {
//     console.log(counter);
//   }
//   counter += 1;
// }

//Print all numbers divisable by 5 & 3 between 5 & 50
// console.log("Printing all numbers divisable by 5 & 3 between 5 & 50");
var counter = 5;

// while (counter <= 50) {
//   if (counter % 5 === 0 && counter % 3 === 0) {
//     console.log(counter);
//   }
//   counter += 1;
// }

//SECTION THREE - For Loops
//Print all numbers between -10 & 19
// for (var i = -10; i < 20; i++) {
//   console.log(i);
// }

// //Print all even numbers between 10 & 40
// for (var i = 10; i <= 40; i += 1) {
//   if (i % 2 !== 0) console.log(i);
// }

//Print all odd numbers between 300 & 333
// for (var i = 300; i <= 333; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//Print all numbers divisable by 5 & 3 between 5 & 50
for (var i = 5; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("bubble sort");
    // console.log(i);
  }
  if (i % 3 == 0 && i % 5 !== 0) {
    console.log("bubble");
  }
  if (i % 5 == 0 && i % 3 !== 0) {
    console.log("sort");
  }
}
