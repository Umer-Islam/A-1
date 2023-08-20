/*Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating
 the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it
 with the name of the new person you are inviting.

• Print a second set of invitation messages,
 one for each person who is still in your list. */

let guestList: string[] = [
  "Alberto",
  "Leonardo",
  "Mario"
];

 function inviteToDinner(guests: string[]): void {
  for (let i = 0; i < guests.length; i++) {
    const guest = guests[i];
    console.log(`Dear ${guest}, you are cordially invited to dinner. `);
  }
}


inviteToDinner(guestList);

const absent = guestList[1];
guestList[1] = "Niko";


console.log(`Unfortunately, ${absent} can't make it to the dinner.`);

console.log("Updated Guest List:");
inviteToDinner(guestList);
