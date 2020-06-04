class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value) {
    this._lastName = value;
  }
}

// let's create an instance

let customer = new Customer("Ali", "Jobe");

console.log(customer.firstName);
console.log(customer.lastName);
