// function findOddEven(num = 0) {
//   return new Promise((resolve = () => {}, reject = () => {}) => {
//     setTimeout(() => {
//       if (num % 2 == 0) {
//         resolve("EVEN");
//       } else {
//         reject("ODD");
//       }
//     }, 5000);
//   });
// }

// findOddEven(11)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// findOddEven(10)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

/**
 * ORDER FOOD
 * 1. SELECT LOCATION
 * 2. SELECT RESTAURANT
 * 3. SELECT FOOD
 * 4. PLACE ORDER
 */

// function selectLocation() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Ramanathapuram, Coimbatore");
//     }, 2000);
//   });
// }

// function selectRestaurant() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Bird on tree");
//     }, 2000);
//   });
// }

// function selectFood() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res([
//         "Idli",
//         "Chicken gravy",
//         "Fried rice",
//         "Mutton Chukka",
//         "Fresh Juice",
//       ]);
//     }, 5000);
//   });
// }

// function payNow(paid = false) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (paid) {
//         res("Order paid!!!");
//       } else {
//         rej("Order cannot be placed without paying!!!");
//       }
//     }, 5000);
//   });
// }

// function orderFood() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Order placed!!!");
//     }, 5000);
//   });
// }

// // PROMISE CHAINING
// selectLocation()
//   .then((result) => {
//     console.log("Selected Location", result);
//     return selectRestaurant();
//   })
//   .then((result) => {
//     console.log("Selected Restaurant", result);
//     return selectFood();
//   })
//   .then((result) => {
//     console.log("Selecetd Food Items", result);
//     return payNow(false);
//   })
//   .then((result) => {
//     console.log(result);
//     return orderFood();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("Thanks!!!");
//   });

// function workA(completed = false) {
//   return new Promise((res, rej) => {
//     if (completed) {
//       res("Completed");
//     } else {
//       rej("In Complete");
//     }
//   });
// }

// function workB(completed = false) {
//   return new Promise((res, rej) => {
//     if (completed) {
//       res("Completed");
//     } else {
//       rej("In Complete");
//     }
//   });
// }

// Promise.all([workA(true), workB(true)])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));
