"use strict";
/*
    35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
     • Modify your program to print a statement about each animal, such as A dog would make a great pet.
    • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

*/
// Change the value of index between 0 to 2 to get a statement
let animal = [`Dog`, `Cat`, `Elephant`];
let index = 1;
const statement = `Any of these animals would make a great pet!`;
for (let i = 0; i < animal.length; i += 1) {
    if (index === 0) {
        console.log(`A ${animal[0]} would make a great pet. ${statement}`);
        break;
    }
    else if (index === 1) {
        console.log(` ${animal[1]}s like to hunt. ${statement}`);
        break;
    }
    else if (index === 2) {
        console.log(` ${animal[2]}s have great memory. ${statement}`);
        break;
    }
}
