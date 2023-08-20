/**
  Favorite Fruit: Make a array of your favorite fruits,
  and then write a series of independent if statements that check for certain fruits in your array.

  • Make a array of your three favorite fruits and call it favorite_fruits.

  • Write five if statements. Each should check whether a certain kind of fruit is in your array.
   If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */
var fav_fruits = ["Apple", "Banana", "Orange", "Mango"];
if (fav_fruits[0] === "Apple") {
    console.log("You really like Apple!");
}
else {
    console.log("Whatever!!");
}
if (fav_fruits[2] === "Orange") {
    console.log("You really like Oranges!");
}
else {
    console.log("Whatever!!");
}
if (fav_fruits[1] === "Banana") {
    console.log("You really like bananas!");
}
else {
    console.log("Whatever!!");
}
if (fav_fruits[9] === "Banana") {
    console.log("You really like bananas!");
}
else {
    console.log("Please enter a fruit, from the list....");
}
