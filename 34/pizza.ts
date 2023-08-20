	/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
    
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.*/
let pizza = [`Pizza Fritta`,`Pizza al Padellino`,`Pizza Siciliana`];
for (let i = 0; i <= pizza.length; i+=1){
	console.log(`I like ${pizza[i]}`);
	
}
