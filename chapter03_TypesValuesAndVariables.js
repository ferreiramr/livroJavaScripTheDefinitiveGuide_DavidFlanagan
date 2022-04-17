// DATES AND TIMES

let timestamp = Data.now(); // The current time as a timestamp (a number)
let now = new Date(); // The current time as a Data object.
let ms = now.getTime(); // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.

// TEXT

let euro = "€";
let love = "❤";
euro.length; // => 1: this character has one 16-bit element
love.length; // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"

(""); // The empty string: it has zero characters
("testing");
("3.14");
('name="myform"');
("Wouldn't you prefer O'Reilly's book?");
"τ is the ratio of a circle's circumference to its radius"`"She said 'hi'", he said.`;

// A string representing 2 lines written on one line:
("two\nlines");
// A one-line string written on 3 lines:
"one\
long\
line" // A two-line string written on two lines:
`the newline character at the end of this line
is included literally in this string`;

// Escape Sequences in String Literals

let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + name;

let s = "Hello, world"; // Start with some text

// Obtaining portions of a string
s.substring(1, 4); // => "ell": the 2nd e 3nd, and 4nd characters.
s.slice(1, 4); // => // "ell": same thing
s.slice(-3); // => "rld": last 3 characters
s.split(", "); // => ["Hello", "word"]: split at delimiter string

// Searching a string
s.indexOf("l"); // => 2: positional of first letter l
s.indexOf("l", 3); // => 3> position of first "l" at or after 3
s.indexOf("zz"); // => -1: s does no include the substring "zz"
s.lastIndexOf("l"); // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell"); // => true: the string start with these
s.endsWith("!"); // => false: s does not end with that
s.includes("or"); // => true: s includes substring "or"

//Creating modified version of a string
s.replace("llo", "ya"); // => "Heya, world"
s.toLocaleLowerCase(); // => "hello, world"
s.toUpperCase(); // => "HELLO, WORLD"
s.normalize(); //Unicode NFC normalization: ES6
s.normalize("NFD"); // NDF normalization. Also "NFKC", "NFKD"

//Inspecting individual (16-bit) characters of a string
s.charAt(0); //"H": the first character
s.charAt(s.length - 1); // => "d": the last character
s.charCodeAt(0); // => 72: 16-bit number at the specified position
s.codePointAt(0); // 72: ES6, works for codepoints >16 bits

//String padding functions in ES2017
"x".padStart(3); // => " x": add spaces on the left to a length of 3
"x".padEnd(3); // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*"); // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-"); // => "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim(); // => "test": remove spaces at start and end
" test ".trimStart(); // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd(); // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!"); // => "Hello, world!": just use + operator instead
"<>".repeat(5); // => "<><><><><>": concatenate n copies. ES6

let s2 = "hello, world";
s[0]; // => "h"
s[0]; // => "h"
s[s.length - 1]; // => "d"

// Template Literals

let name2 = "Bill";
let greeting2 = `Hello ${name2}.`; // greeting = "Hello Bill."

let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

// Tagged template literals

`\n`.length; // => 1: the string has a single newline character
String.raw`\n`.length; // => 2: a backslash character and the letter n

// Pattern Matching

let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g; // Matches all instances of one or more digits
pattern.test(text); //Matches all instances of one or more digits
text.search(pattern); // => true: a match exists
text.search(pattern); // => 9: position of first match
text.match(pattern); // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#"); // => "testing: #, #, #"
text.split(/\D+/); // => ["","1","2","3"]: split on nondigits

// Boolean Values

if (a === 4) {
  b = b + 1;
} else {
  a = a + 1;
}

undefined;
null;
0 - 0;
NaN;
(""); // the empty string

if ((x === 0 && y === 0) || !(z === 0)) {
  // x and y are both zero os z is non-zero
}

let strname = "string name"; // A string to use as a property name
let symname = Symbol("propname"); // A Symbol to use as a property name
typeof strname; // => "string": strname is a string
typeof symname; // => "symbol": symname is a symbol
let o = {}; // Create a new object
o[strname] = 1; // Define a property with a string name
o[symname] = 2; // Define a property with a Symbol name
o[strname]; // => 1: access the string-named property
o[symname]; // => 2: acc the symbol-named property

let s3 = Symbol("sym_x");
s.toString(); // => "Symbol(sym_x)"

let s4 = Symbol.for("shared");
let t = Symbol.for("shared");
s === t; // =true
s.toString(); // => "Symbol(shared)"
Symbol.keyFor(t); // "shared"

// IMMUTABLE PRIMITIVE VALUES AND MUTABLE OBJECT REFERENCES

let s5 = "hello"; // Start with some lowercase text
s5.toUpperCase(); // Returns "HELLO", but doesn't alter s
s; // => "hello": the original string has not changed

let o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property

let a = [1, 2, 3]; // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element

let o = { x: 1 },
  p = { x: 1 }; // Two objects with the same properties
o === p; // => false: distinct objects are never equal
let a = [],
  b = []; // Two distinct, empty arrays
a === b; // false: distinct arrays are never equal

let a2 = ["a", "b", "c"]; // An array we want to copy
let b2 = []; // A distinct array we'll copy into
for (let i = 0; i < a.length; i++) {
  // For each index of a[]
  b[i] = a[i]; //Copy an element of a a into b
}
let c = Array.from(b); // In ES6, copy arrays with Array.from()

function equalArrays(a, b) {
  if (a === b) return true; // Identical array are equal
  if (a.length != b.length()) return false; // Different-size arrays not equal
  for (let i = 0; i < a.length; i++) {
    // Loop through all elements
    if (a[i] !== b[i]) return false; // If any differ, arrays not equal
  }
  return true; // Otherwise they are equal
}

// TYPE CONVERSIONS

10 + " objects"; // => "10 objects": Number 10 converts to a string
"7" * "4"; // => 28: both string convert to numbers
let n = 1 - "x"; // n == NaN "x" can't convert to a number
n + " objects"; // => "NaN object

parseFloat("1,6");

// DECLARATIONS WITH LET AND CONST

let i2;
let sum2;

let i, sum;

for (let i = 0, len = data.length; i < len; i++) console.log(data[i]);
for (let datum of data) console.log(datum);
for (let property in object) console.log(property);

for (const datum of data) console.log(datum);
for (const property in object) console.log(property);

// DESTRUCTURING ASSIGNMENT

// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}
// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

let o = { x: 1, y: 2 }; // The object we'll loop over
for (const [name, value] of Object.entries(o)) {
  console.log(name, value); // Prints "x 1" and "y 2"
}

// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
const { sin, cos, tan } = Math;

// Same as const cosine = Math.cos, tangent = Math.tan;
const { cos: cosine, tan: tangent } = Math;

// Start with a data structure and a complex destructuring
let points = [{x: 1, y: 2}, {x: 3, y: 4}];
let [{x: x1, y: y1}, {x: x2, y: y2}] = points;

// Check your destructuring syntax by flipping the assignment around
let points2 = [{x: x1, y: y1}, {x: x2, y: y2}]; // points2 == points