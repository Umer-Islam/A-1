"use strict";
/**
 * 	36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

 */
function make_shirt(size, color, message) {
    console.log(`You have ordered a ${size}  ${color} T-shirt with the message: "${message}"`);
    return;
}
// Call the function
make_shirt(`Medium`, `Black`, `Text here!!`);
