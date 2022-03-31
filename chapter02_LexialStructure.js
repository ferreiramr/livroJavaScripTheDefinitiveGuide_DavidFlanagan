// This is a single-line comment.

/* This is also a comment */ // and here is another comment.

/*
 * This is a multi-line comment.The extra * character at the star of
 * each line are not a required part of the syntax; they just look cool!
 */
  
// UNICODE ESCAPE SEQUENCES

let café = 1; // Define a variable using a Unicode character
caf\u00e9 // => 1; access the variable using an escape sequence
caf\u{E9} // => 1; another form of the same escape sequence

console.log("\u{1F600}");
// Prints a smiley face emoji