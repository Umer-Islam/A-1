"use strict";
/**
 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase "The Great" to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */
let magic = [`harry`, `dumbledore`, `voldemort`, `harmoine`, `ronald`];
function show_magicians(magai) {
    for (let i = 0; i < magic.length; i += 1) {
        console.log(magic[i]);
    }
}
function make_great(magai) {
    let greatmagic = [];
    for (let i = 0; i < magic.length; i += 1) {
        greatmagic.push(`The Great ${magai[i]}`);
    }
    return greatmagic;
}
const orignal = magic.slice();
magic = make_great(magic);
show_magicians(magic);
