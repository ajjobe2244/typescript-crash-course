var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// let's create an instance
var customer = new Customer("Ali", "Jobe");
console.log(customer.firstName);
console.log(customer.lastName);
