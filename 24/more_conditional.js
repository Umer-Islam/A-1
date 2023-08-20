"use strict";
//• Tests for equality and inequality with strings
function equality(v1, v2) {
    return v1.length == v2.length;
}
const v1 = "Hello world!";
const v2 = " Good morning";
console.log(equality(v1, v2));
//• Tests using the lower case function
function lowercase(str) {
    return str === str.toLowerCase();
}
let str = "this sentence is in lower case";
console.log(lowercase(str));
/*• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to */
function num(num1, num2) {
    return num1 >= num2;
}
const num1 = 333;
const num2 = 999;
console.log(num(num1, num2));
//• Tests using "and" operator
console.log(num1 < num2 && num2 < 1000);
//• Tests using "or" operator
console.log(num1 > num2 || num2 > 1000);
//• Test whether an item is in a array
let colors = [`red`, `green`, `blue`];
console.log(Array.isArray(colors));
console.log(!Array.isArray(colors));
