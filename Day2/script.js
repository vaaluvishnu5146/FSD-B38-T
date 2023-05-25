// function addNum(num1, num2) {
//   var sum = num1 + num2;
//   console.log(sum);
//   // return sum;
// }

// var result = addNum(10, 20);
// console.log(result);

// try {
//   alert("Hello all");
//   confirm("Are you sure to run code?");
//   console.log(window);
// } catch (error) {
//   console.log(error);
//   console.log(process);
// }

var heading = window.document.getElementById("greeting");

window.setTimeout(() => {
  heading.style = "color: red";
  heading.innerText = "Day 2 Browser Internals";
}, 5000);
