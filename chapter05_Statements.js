// CHAPTER 05 - STATEMENTS

greeting = "Hello " + name;
i *= 3;

// COMPOUND AND EMPTY STATEMENTS

{
  x = Math.PI;
  cx = Math.cos(x);
  console.log("cos(π) = " + cx);
}

// Initialize an array a
for (let i = 0; i < a.length; a[i++] = 0);

if (a === 0 || b === 0); // Oops! This line does nothing...
o = null; // and this line is always executed.

for (let i = 0; i < a.length; a[i++] = 0 /* empty */);

// CONDITIONALS

if (username == null)
  // If username is null or undefined,
  username = "John Doe"; // define it

if (!username) username == "John Doe";

if (!address) {
  address = "";
  message = "Please specify a mailing address.";
}

if (n === 1) console.log("You have 1 new message.");
else console.log(`You have ${n} new messages.`);

switch (n) {
  case 1:
    // Execute code block #1.
    break;
  case 2:
    // Execute code block #2.
    break;
  case 3:
    // Execute code block #3.
    break;
  default:
    // Execute code block #4.
    break;
}

//  LOOPS

let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

function printArray(a) {
  let len = a.length,
    i = 0;
  if (len === 0) {
    console.log("Empty Array");
  } else {
    do {
      console.log(a[i]);
    } while (++i < len);
  }
}

for (let count = 0; count < 10; count++) {
  console.log(count);
}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum = 0;
for (let element of data) {
  sum += element;
}

try {
  // Ask the user to enter a number
  let n = Number(prompt("Please enter a positive integer", ""));
  // Compute the factorial of the number, assuming the input is valid
  let f = factorial(n);
  // Display the result
  alert(n + "! = " + f);
} catch (ex) {
  // If the user's input was not valid, we end up here
  alert(ex); // Tell the user what the error is
}
