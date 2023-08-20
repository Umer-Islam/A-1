"use strict";
/**
 * 	41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

 */
let magic = [`harry`, `dumbledore`, `voldemort`, `harmoine`, `ronald`];
function show_magicians() {
    for (let i = 0; i < magic.length; i += 1) {
        console.log(magic[i]);
    }
}
show_magicians();
