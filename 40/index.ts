/**
 * 	40. Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

 */
interface music {
    name: string;
    title: string;
    num?: number;
//"num?"? is used to make a variable optional.
}
function album(name: string, title:string, num?:number): music{
    return {name, title, num}
}
let music1: music = album(`narnia`,`tiger`,3);
let music2: music = album(`frodo`, `ring `)
let music3:music = album( `dumbledore`, `phenix`)



console.log(music1);
console.log(music2);
console.log(music3);














