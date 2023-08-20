/*our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements about these items,
  such as “I would like to own a Honda motorcycle.” */


  let travel: string[] = ["motorcycle", "car", "drone", "bike", "skateboard", "boat"];

for (let mode of travel) {
  console.log(`I would like to own a`, mode)
  console.log(`I would like to sell my `,mode)
  console.log(`my`, mode, `has been very useful`)
}



