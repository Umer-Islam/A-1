"use strict";
/**
 43. Unchanged Magicians: Start with your work from previous Exercise. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 */
let magic = [`harry`, `dumbledore`, `voldemort`, `harmoine`, `ronald`];
function show_magicians(magai) {
    for (let i = 0; i < magai.length; i += 1) {
        console.log(magai[i]);
    }
}
function make_great(magai) {
    const greatMagicians = [];
    for (let i = 0; i < magai.length; i += 1) {
        greatMagicians.push(`The Great ${magai[i]}`);
    }
    return greatMagicians;
}
const original = magic.slice();
const modified = make_great(original);
show_magicians(original);
console.log(`\n________________Modified Magicians________________`);
show_magicians(modified);
