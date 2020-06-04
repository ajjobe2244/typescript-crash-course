class Customer {
  firstName: string;
  lastName: String;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// let's create an instance

let customer = new Customer("Ali", "Jobe");

console.log(customer.firstName);
console.log(customer.lastName);
