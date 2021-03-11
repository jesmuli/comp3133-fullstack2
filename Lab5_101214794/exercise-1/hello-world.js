/*
var greeter = function (name) {
    console.log('Hello ' + name);
}

greeter("John Smith")
*/
/* Rewrite this code block using TypeScript ES6 features use the let keyword, lambda (fat arrow) declaration for anonymous functions and the back tick (template literals).  Change the function for two names, first and last.
*/
var greeter = function (firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
};
greeter("John", "Smith");
