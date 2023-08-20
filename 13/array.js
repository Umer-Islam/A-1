/*our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements about these items,
  such as “I would like to own a Honda motorcycle.” */
var travel = ["motorcycle", "car", "drone", "bike", "skateboard", "boat"];
for (var _i = 0, travel_1 = travel; _i < travel_1.length; _i++) {
    var mode = travel_1[_i];
    console.log("I would like to own a", mode);
    console.log("I would like to sell my ", mode);
    console.log("my", mode, "has been very useful");
}
