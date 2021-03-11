"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = age;
    }
    Customer.prototype.GetAge = function () {
        console.log("Age: " + this.Age);
    };
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", 10);
customer.greeter();
customer.GetAge();
