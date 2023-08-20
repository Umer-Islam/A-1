/*Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point,
 just add your name and the current date at the top of each program file.
 Then write one sentence describing what the program does. */
// console.log() this command is used to display/ print an answer
console.log("hello world");
// Upper case
var upperCase = 'milton eric';
upperCase = upperCase.toUpperCase();
console.log(upperCase);
/*
//title case(Not working properly)
let titleCase: string = 'mIlToN eRiC'
titleCase = titleCase.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(titleCase)
*/
// title case
function toTitleCase(titleCase) {
    return titleCase.toLowerCase().replace(/(^|\s)\w/g, function (match) { return match.toUpperCase(); });
}
var titleCase = 'mIlTon eRicSon';
titleCase = toTitleCase(titleCase);
console.log(titleCase);
