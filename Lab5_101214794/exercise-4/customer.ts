export class Customer {
	private firstName: string
	private lastName: string
	private Age: number

	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.Age = age;
	}

	GetAge(): void {
		console.log(`Age: ${this.Age}`);
	} 

	public greeter() {
		console.log(`Hello ${this.firstName} ${this.lastName}`);
	}

}


let customer = new Customer("John", "Smith", 10);
customer.greeter();
customer.GetAge();