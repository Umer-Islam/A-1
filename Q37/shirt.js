"use strict";
/**
 * 	36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
    37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

 */
let size = `Large`;
let text = `I Love .ts`;
function shirt(size, text) {
    console.log(`You have ordered a shirt of size ${size}, with text message "${text}"`);
}
shirt(size, text);
shirt(`Medium`, text);
shirt(`Small`, `I love .js`);
