/**
 Hello Admin: Make a array of five or more usernames, including the name 'admin'.
  Imagine you are writing code that will print a greeting to each user after they log in to a website.
   Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like 
  to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 */
let user_name = [`Admin`, `Developer`, `Writer`,`Mangager`,`User`]
let index : number = 33;
if (`Admin` === user_name[index]){
    console.log (`Hello ${user_name[index]}, would you like to see a status report?`)
}
    else if (`Admin` !== user_name[index]) {
    console.log(`Hello, ${user_name[index]}`)       
    }
    
   

    



