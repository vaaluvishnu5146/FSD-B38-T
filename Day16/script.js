// console.log("Hello all");
// const timeoutOne = setTimeout(() => {
//   console.log("Inside Timeout");
// }, 5000);
// const intervalOne = setInterval(() => {
//   console.log("Inside Interval");
// }, 2000);
// try {
//   console.log("Setting storage");
//   localStorage.setItem("test", "testing");
//   console.log(localStorage.getItem("test"));
// } catch (error) {
//   console.log(error);
// }
// console.log("Hello everyone");
// clearInterval(intervalOne);
// clearTimeout(timeoutOne);
// let ticks = 10;

// const tickInterval = setInterval(() => {
//   ticks--;
//   console.log(ticks);
//   if (ticks === 0) {
//     clearInterval(tickInterval);
//   }
// }, 1000);

// RECURSSION
//
// function print(num = 10, cb = (data) => {}) {
//   cb(num);
//   if (num === 1) return 1;
//   return print(num - 1, cb);
// }
// print(10, (data) => {
//   console.log(data);
// });

// ADD TWO NUMS
// function add(a, b, cb = (data) => {}) {
//   let sum = a + b;

//   if (sum % 2 === 0) {
//     cb("EVEN NUMBER");
//   } else {
//     cb("ODD NUMBER");
//   }
// }
// add(1, 3, (data) => {
//   console.log(data);
// });

// CALL BACK HELL OR PYRAMID OF DOOM
const greet = (message = "", cb = (d) => {}) => {
  console.log(message);
  cb(message);
};

greet(10, () => {
  console.lg("dasdasd");
  greet(9, () => {
    greet(8, () => {
      greet(7, () => {
        greet(6, () => {
          greet(5, () => {
            greet(4, () => {
              greet(3, () => {
                greet(2, () => {
                  greet(1, () => {
                    greet("Happy Independence Day!!!");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
