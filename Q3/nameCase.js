// Lower case 
var lowerCase = 'MILTON ERIC';
lowerCase = lowerCase.toLowerCase();
console.log(lowerCase);
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
