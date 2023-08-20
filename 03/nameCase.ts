// Lower case 
let lowerCase: string = 'MILTON ERIC'
lowerCase = lowerCase.toLowerCase()
console.log(lowerCase)
// Upper case
let upperCase: string = 'milton eric'
upperCase = upperCase.toUpperCase()
console.log(upperCase)

/*
//title case(Not working properly)
let titleCase: string = 'mIlToN eRiC'
titleCase = titleCase.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(titleCase)
*/

// title case
function toTitleCase(titleCase:string): string {
    return titleCase.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}
let titleCase: string = 'mIlTon eRicSon'
titleCase = toTitleCase(titleCase)
console.log(titleCase)
