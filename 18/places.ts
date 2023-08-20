
/*Seeing the World: Think of at least five places in the world you’d like to visit.

1. Store the locations in a array. Make sure the array is not in alphabetical order.

2. Print your array in its original order.

3. Print your array in alphabetical order without modifying the actual list.

4. Show that your array is still in its original order by printing it.

5.Print your array in reverse alphabetical order without changing the order of the original list.

6. Show that your array is still in its original order by printing it again.
7. Reverse the order of your list. Print the array to show that its order has changed.

8. Reverse the order of your list again. Print the list to show it’s back to its original order.

9. Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
*/

let visitPlaces: string[] = [ 
    `mecca`, 
    `berlin`,
    `nevada`,
    `sidney`,
    `liverpool`
]


console.log(`Initally:`,visitPlaces)
//[...visitPlaces] creates a new array using the previous array.
let sort = [...visitPlaces].sort()
console.log(`Alphabetically sorted:`,sort)

console.log(`Original order of visitplaces:`,visitPlaces)
let reverse = [...sort].reverse()
console.log(`Reverse of Alphabetical list:`,reverse)
console.log(`Showing that original list isn't changed`,visitPlaces)
let reverseVisitplaces= [...visitPlaces].reverse()
console.log(`Reverse of the Original list:`,reverseVisitplaces)
let againReverse = [...reverseVisitplaces].reverse()
console.log(`Double reverse of Orignial list that is same as original list`,againReverse)
let againReversealphabetical = [...againReverse].sort()
console.log(`Alphabetical order of the above array`,againReversealphabetical)