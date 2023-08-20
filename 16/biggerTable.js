"use strict";
/**
16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list.
 */
let guestList = ["Alberto", "Leonardo", "Mario"];
function inviteToDinner(guests) {
    for (let i = 0; i < guests.length; i++) {
        const guest = guests[i];
        console.log(`Dear ${guest}, you are cordially invited to dinner. `);
    }
}
inviteToDinner(guestList);
const absent = guestList[1];
guestList[1] = "Niko";
console.log(`----> :(  Unfortunately, ${absent} can't make it to the dinner.`);
console.log("----------------Updated Guest List----------------");
inviteToDinner(guestList);
console.log("~~~~~~~~~~~~~~~~~~~~Just found a bigger table~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let newGuest1 = `Luco`;
guestList = [newGuest1, ...guestList];
let newGuest2 = `duke`;
guestList.splice(2, 0, newGuest2);
let newGuest3 = `henri`;
guestList.push(newGuest3);
inviteToDinner(guestList);
