// CHAPTER 4 - EXPRESSIONS AND OPERATORS

// PRIMARY EXPRESSIONS

1.23 // A number literal
"hello" // A string literal
    / pattern / // A regular expression literal

    true // Evaluates to the boolean true value
false // Evaluates to the boolean false value
null // Evaluates  to the null value
this // Evaluates to the "current" object

i // Evaluates to the value of the variable i.
sum // Evaluates to the value of the variable sum.
undefined // The value of the "undefined" property of the global object

// [] // An empty array: no expression inside brackets means no elements
[1 + 2, 3 + 4] // A 2-element array. Fist elements is 3, second is 7

let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Biw q has the same properties as p

let rectangle = {
    upperLeft: { x: 2, y: 2 },
    lowerRight: { x: 4, x: 5 }
};

// This function returns the square of the value passed to it.
let square = function (x) { return x * x }

let o = { x: 1, y: { z: 3 } }; // An example object
let a4 = [o, 4, [5, 6]]; // An example array that contains the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o
a[1] // => 4: element at index 1 of expression a
a[2]["1"] // => 6: element at index 1 of expression a[2]
a[0].x // => 1: property x of expression a[0]

let a2; // Oops, we forget to initialize this variable!
let index = 0;
try {
    a[index++]; // Throws TyperError
} catch (e) {
    index // => 1: increment occurs before TypeError is thrown
}
a?.[index++] // => undefined: because a is undefined
index // => 1: not incremented because ?.[] short-circuits
a[index++] // !TyperError: can't index undefined.

false(0) // f is the function expression; 0 is the argument expression.
Math.max(x, y, z) // Math.max is the function; x, y, and z are the arguments.
a.sort() // a.sort is the function; there are no arguments.

function square(x, log) { // The second argument is an optional function
    if (log) { // If the optional funciton is passed
        log(x) // Invoke it
    }
    return x * x // Return the square of the argument
}

function square(x, log) { // The second argument is an optional function
    log?.(x); // Call the function if thre is one
    return x * x; // Return the square of the argument
}

let f = null, x = 0;
try {
    f(x++); // Throws TypeError because f is null
} catch (e) {
    x // => 1: x gets incrementd before the exception is thrown
}

f?.(x++) // => undefined: f is null, but no exception thrown
x // => increment is skipped because of short-circuiting

o.m() // Regular property access, regular invocation
o?.m() // Conditional property access, regular invocation
o.m?.() // Regular property access, conditional invocation

new Object()
new PointerEvent(2, 3)

new Object
new Date

// my is an object with a property named functions whose value is an
// array of functions. We invoke function number x, passing it argument
// y, and then we ask for the type of the value returned.
typeof my.functions[x](y)

w = x - y - z;
w = ((x - y) - z);
y = a ** b ** c;
x = ~-y;
w = x = y = z;
q = a ? b : c ? d : e ? f : g;

y = (a ** (b ** c));
x = ~(-y);
w = (x = (y = z));
q = a ? b : (c ? d : (e ? f : g));

1 + 2 // => 3
"hello" + " " + "there" // => "hello there"
"1" + "2" // => "12"

1 + 2 // => 3: addition
"1" + "2" // => "12": concatenation
"1" + 2 // => "12": concatenation after number-to-string
1 + {} // => "1[object Object]": concatenation after object-to-string
true + true // => 2: addition after boolean-to-number
2 + null // => 2: addition after null converts to 0
2 + undefined // => NaN: addition after undefined converts to NaN

1 + 2 + " blind mice" // => "3 blind mice"
1 + (2 + " blind mice") // => "12 blind mice"

let i = 1, j = ++i; // i and j are both 2
let n = 1, m = n++; // n is 2, m is 1

1 + 2 // => 3: addition.
"1" + "2" // => "12": concatenation.
"1" + 2 // => "12": 2 is converted to "2".
11 < 3 // => false: numeric comparison.
"11" < "3" // => true: string comparison.
"11" < 3 // => false: numeric comparison, "11" converted to 11.
"one" < 3 // => false: numeric comparison, "one" converted to NaN.

let point = { x: 1, y: 1 }; // Define an object
"x" in point // => true: object has property named "x"
"z" in point // => false: object has no "z" property.
"toString" in point // => true: object inherits toString method
let data = [7, 8, 9]; // An array with elements (indices) 0, 1, and 2
"0" in data // => true: array has an element "0"
1 in data // => true: numbers are converted to strings
3 in data // => false: no element 3

let d = new Date(); // Create a new object with the Date() constructor
d instanceof Date // => true: d was created with Date()
d instanceof Object // => true: all objects are instances of Object
d instanceof Number // => false: d is not a Number object
let a3 = [1, 2, 3]; // Create an array with array literal syntax
a instanceof Array // => true: a is an array
a instanceof Object // => true: all arrays are objects
a instanceof RegExp // => false: arrays are not regular expressions

x === 0 && y === 0 // true if, and only if, x and y are both 0

let o2 = { x: 1 };
let p2 = null;
o && o.x // => 1: o is truthy, so return value of o.x
p && p.x // => null: p is falsy, so return it and don't evaluate p.x

if (a === b) stop(); // Invoke stop() only if a === b
(a === b) && stop(); // This does the same thing

// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
let max = maxWidth || preferences.maxWidth || 500;

// Copy the properties of o to p, and return p
function copy(o, p) {
    p = p || {}; // If no object passed for p, use a newly created object.
    // function body goes here
}

// DeMorgan's Laws
!(p && q) === (!p || !q) // => true: for all values of p and q
!(p || q) === (!p && !q) // => true: for all values of p and q

i = 0; // Set the variable i to 0.
o.x = 1; // Set the property x of object o to 1.

data[i++] *= 2;
data[i++] = data[i++] * 2;

eval("3+2") // => 5

eval("function f() { return x+1; }");

const geval = eval; // Using another name does a global eval
let x2 = "global", y = "global"; // Two global variables
function f() { // This function does a local eval
    let x = "local"; // Define a local variable
    eval("x += 'changed';"); // Direct eval sets local variable
    return x; // Return changed local variable
}
function g() { // This function does a global eval
    let y = "local"; // A local variable
    geval("y += 'changed';"); // Indirect eval sets global variable
    return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":

x > 0 ? x : -x // The absolute value of x

greeting = "hello " + (username ? username : "there");

greeting = "hello ";
if (username) {
    greeting += username;
} else {
    greeting += "there";
}


(a !== null && a !== undefined) ? a : b

// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
let max2 = maxWidth || preferences.maxWidth || 500;

// If maxWidth is defined, use that. Otherwise, look for a value in
// the preferences object. If that is not defined, use a hardcoded constant.
let max3 = maxWidth ?? preferences.maxWidth ?? 500;

let options = { timeout: 0, title: "", verbose: false, n: null };
options.timeout ?? 1000 // => 0: as defined in the object
options.title ?? "Untitled" // => "": as defined in the object
options.verbose ?? true // => false: as defined in the object
options.quiet ?? false // => false: property is not defined
options.n ?? 10; // => 10: property is null

(a ?? b) || c // ?? first, then ||
a ?? (b || c) // || first, then ??
    // a ?? b || c // SyntaxError: parentheses are required

    // If the value is a string, wrap it in quotes, otherwise, convert
    (typeof value === "string") ? "'" + value + "'" : value.toString()

let o = { x: 1, y: 2 }; // Start with an object
delete o.x; // Delete one of its properties
"x" in o // => false: the property does not exist anymore
let a = [1, 2, 3]; // Start with an array
delete a[2]; // Delete the last element of the array
2 in a // => false: array element 2 doesn't exist anymore
a.length // => 3: note that array length doesn't change, though

let o = { x: 1, y: 2 };
delete o.x; // Delete one of the object properties; returns true.
typeof o.x; // Property does not exist; returns "undefined".
delete o.x; // Delete a nonexistent property; returns true.
delete 1; // This makes no sense, but it just returns true.
// Can't delete a variable; returns false, or SyntaxError in strict mode.
delete o;
// Undeletable property: returns false, or TypeError in strict mode.
delete Object.prototype;

let counter = 0;
const increment = () => void counter++;
increment() // => undefined
counter // => 1

i = 0, j = 1, k = 2;
i = 0; j = 1; k = 2;

// The first comma below is part of the syntax of the let statement
// The second comma is the comma operator: it lets us squeeze 2
// expressions (i++ and j--) into a statement (the for loop) that expects 1.
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(i + j);
}