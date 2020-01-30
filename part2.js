//SECTION THREE - For Loops

//Print all numbers between 6 & 19 with a multiple of 3

// for (var i = 6; i <= 19; i += 3) {
//   console.log(i);
// }

//Print all numbers between -10 & 19
// for (var i = -10; i <= 19; i++) {
//   console.log(i);
// }

// //Print all even numbers between 10 & 40
// for (let i = 10; i <= 40; i += 2) {
//   console.log(i);
// }

//Print all odd numbers between 300 & 333
// for (let i = 300; i <= 333; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//Print all numbers divisable by 5 & 3 between 5 & 50
for (let i = 5; i <= 50; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log(i);
  }
}
