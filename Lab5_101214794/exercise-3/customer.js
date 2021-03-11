var Customer = /** @class */ (function () {
    // Constructor
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
//object - instance of class
var customer = new Customer("John", "Smith");
customer.greeter();
