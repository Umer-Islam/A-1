/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end
 of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces.

*/
// with white spaces and line break
let personName: string = "\t\t\n\n\n\n\t\t  John Doe \n\n\t\t\n\n\n";
console.log("With WhiteSpaces:", personName)
//stripped name
personName = personName.trim();
console.log("WithOut WhiteSpaces:", personName )

