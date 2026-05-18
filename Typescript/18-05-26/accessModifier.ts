//ES6 allows to define a class
class Person {
    id: number;
    firstName: string;
    lastName: string;
 
    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
 
    getFullName(): string
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
 
let person1= new Person(1, "John", "Doe");
console.log(person1.getFullName()); // Output: John Doe
 
//three access modifiers in typescript
class Employee {
    private id: number; //private limits the access to the property within the class only
    protected firstName: string; //protected allows access to the property within the class and its subclasses
    public lastName: string;
 
    //readonly property
    readonly department: string;
 
    constructor(id: number, firstName: string, lastName: string, department: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
 
 
    }
 
    displayEmployeeInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.firstName} ${this.lastName}`);
    }
 
}
 
class Manager extends Employee {
    constructor(id: number, firstName: string, lastName: string, department: string = "Management") {
        super(id, firstName, lastName, department);
    }
 
        getProtectedFirstName(): string {
        return this.firstName; // Accessing protected property from the subclass
    }
 
}
 
let employee1 = new Employee(1, "Alice", "Smith",   "Engineering");
// console.log(employee1.id); // Error: Property 'id' is private and only accessible within class 'Employee'.
// console.log(employee1.firstName); // Error: Property 'firstName' is protected and only accessible within class 'Employee' and its subclasses.
console.log(employee1.lastName); // Output: Smith
employee1.displayEmployeeInfo(); // Output: ID: 1, Name: Alice Smith
 
let manager1 = new Manager(2, "Bob", "Johnson", "Management");
// console.log(manager1.id); // Error: Property 'id' is private and only accessible within class 'Employee'.
//console.log(manager1.firstName); // Error: Property 'firstName' is protected and only accessible within class 'Employee' and its subclasses.
console.log(manager1.lastName); // Output: Johnson
console.log(manager1.getProtectedFirstName()); // Output: Bob
manager1.displayEmployeeInfo(); // Output: ID: 2, Name: Bob Johnson
 
//accessing readonly property
console.log(employee1.department); // Output: Engineering
// employee1.department = "HR"; // Error: Cannot assign to 'department' because it is a read-only property.
 