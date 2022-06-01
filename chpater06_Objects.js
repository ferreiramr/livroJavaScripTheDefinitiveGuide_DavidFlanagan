// Object Literals

let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y + 1 }; // More complex values
let book = {
  "main title": "JavaScrip", // These property names include spaces,
  "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
  for: "all audiences", // for is reserved, bu no quotes
  author: {
    // The value of this property is
    firstname: "David", //itself an object.
    surname: "Flanagan",
  },
};

let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapping

let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.

book.edition = 7; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Change the "main title" property.

function addstock(portfolio, stockname, shares) {
  portfolio[stockname] = shares;
}

function computeValue(portfolio) {
  let total = 0.0;
  for (let stock in portfolio) {
    // For each stock in the portfolio:
    let shares = portfolio[stock]; // get the number of shares
    let price = getQuote(stock); // look up share price
    total += shares * price; // add stock value to total value
  }
  return total; // Return total value.
}

let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.
let f = q.toString(); // toString is inherited from Object.prototype
q.x + q.y; // => 3; x and y are inherited from o and p

let unitcircle = { r: 1 }; // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1; c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
unitcircle.r // => 1: the prototype is not affected