/**
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
let guestList: string[] = ["Alberto", "Leonardo", "Mario"];

function inviteToDinner(guests: string[]): void {
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

console.log(
  "~~~~~~~~~~~~~~~~~~~~Just found a bigger table~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let newGuest1 = `Luco`;
guestList = [newGuest1, ...guestList];
let newGuest2 = `duke`;
guestList.splice(2, 0, newGuest2);
let newGuest3 = `henri`;
guestList.push(newGuest3);
inviteToDinner(guestList);
console.log(`Shrinking guest list,new dinner table won’t arrive in time for the dinner`)
for ( let i = 0 ; i = guestList.length -2; i+=1){   
let shrink = guestList.pop();
console.log(` ${shrink},You are no longer invited.`);
   

}