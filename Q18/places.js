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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitPlaces = [
    "mecca",
    "berlin",
    "nevada",
    "sidney",
    "liverpool"
];
console.log("Initally:", visitPlaces);
//[...visitPlaces] creates a new array using the previous array.
var sort = __spreadArray([], visitPlaces, true).sort();
console.log("Alphabetically sorted:", sort);
console.log("Original order of visitplaces:", visitPlaces);
var reverse = __spreadArray([], sort, true).reverse();
console.log("Reverse of Alphabetical list:", reverse);
console.log("Showing that original list isn't changed", visitPlaces);
var reverseVisitplaces = __spreadArray([], visitPlaces, true).reverse();
console.log("Reverse of the Original list:", reverseVisitplaces);
var againReverse = __spreadArray([], reverseVisitplaces, true).reverse();
console.log("Double reverse of Orignial list that is same as original list", againReverse);
var againReversealphabetical = __spreadArray([], againReverse, true).sort();
console.log("Alphabetical order of the above array", againReversealphabetical);
