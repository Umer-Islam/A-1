"use strict";
/**
 * 	39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.

 */
let city = `Lahore`;
let country = `Pakistan.`;
function city_country(city, country) {
    console.log(`${city}, ${country}`);
}
city_country(city, country);
city_country(`Berlin`, `Germany.`);
city_country(`Mexico City`, `Mexico.`);
