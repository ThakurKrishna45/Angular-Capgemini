interface Product
{
    id: number;
    name: string;
    price: number;
}
 
function getProduct(id: number): Product
{
    return {
        id: id,
        name: `Product ${id}`,
        price: id * 10
    };
}
 
const product = getProduct(1);
console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
//console.log(`Product ID: ${product.id}, Name: ${product.category}, Price: ${product.price}`);
 
function showProductDetails(name: string, price: number): void
{
    console.log(`ShowProductDetails() Product Name: ${name}, Price: ${price}`);
}
 
showProductDetails(product.name, product.price);
//showProductDetails(product.category, product.price);
 
// TypeScript uses the Type Annotation to specify explicit types for identifiers
// such as variables, function parameters, and return types.
//  This helps catch type-related errors during development and provides better code readability.
// Uses the syntax as identifier: type
let productName: string = "Sample Product";
let productPrice: number;
productPrice = 99.99;
const productId: number = 12345;
 
 
//productName=true; // Error: Type 'boolean' is not assignable to type 'string'.
 
//for arrays, we can use the type annotation to specify the type of elements in the array.
//let arrayType: type[];
let names: string[] = ["Alice", "Bob", "Charlie"];
 
//Object type annotation
let person:
 {
    name: string;
    age: number
} ;
 
person = {
    name: "John Doe",
    age: 30
};
 
person.name = "Jane Doe"; // Valid
//person.age = "thirty"; // Error: Type 'string' is not assignable to type 'number'.    
 
// Function type annotation
function add(a: number, b: number, result:string): number
{
    console.log(result);
    return a + b;
}
 
let greeting :(name: string) => void;
greeting = (name: string) => {
    console.log(`Hello, ${name}!`);
}
 
greeting("Alice");
//greeting(); // Error: Expected 1 arguments, but got 0.
 

 
//Tuple In TypeScript, a tuple is a fixed-length array that can contain elements of different types. It allows you to define an array with a specific number of elements and their corresponding types.
let skills: [string, number];
skills = ["TypeScript", 5];
console.log(`Skill: ${skills[0]}, Experience: ${skills[1]} years`);
 
//optional tuple elements can be defined using the '?' symbol, allowing you to omit certain elements when creating a tuple instance.
let employeeInfo: [string, number, string?];
employeeInfo = ["Alice", 28];
console.log(`Employee Name: ${employeeInfo[0]}, Age: ${employeeInfo[1]}, Department: ${employeeInfo[2] ?? "N/A"}`);
 
//Enum In TypeScript, an enum is a way to define a set of named constants. It allows you to create a collection of related values that can be used in your code.
 
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;
console.log(`Favorite Color: ${Color[favoriteColor]}`); // Output: Favorite Color: Green    
 
//any type
let randomValue: any;
randomValue = 42;
console.log(`Random Value: ${randomValue}`);
randomValue = "Hello, TypeScript!";
console.log(`Random Value: ${randomValue}`);
randomValue = true;
console.log(`Random Value: ${randomValue}`);    
 
//void type, absence of any type, is used to indicate that a function does not return a value.
function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}
 
logMessage("This is a log message.");
 
//Type aliases - you can use type aliases to create new names for existing types,
// making your code more readable and maintainable.
// Type aliases can be used for primitive types, object types, union types, intersection types, and more.
//type alias = existing type ;
type stringType = string;
let firstName: stringType = "John";
 
type Employee = {
    id: number;
    name: string;
    department: string;
};
 
let employee3: Employee = {
    id: 1,
    name: "Alice",
    department: "Engineering"
};  
 
console.log(`Employee ID: ${employee3.id}, Name: ${employee3.name}, Department: ${employee3.department}`);
 
//union types allow you to specify that a variable can hold values of multiple types. You can use the '|' operator to define a union type.
let identifier: number | string;
identifier = 123;
identifier = "ABC";
console.log(`Identifier: ${identifier}`);
 
type StringOrNumber = string | number;
let value: StringOrNumber;
value = "Hello";
console.log(`Value: ${value}`);
value = 42;
console.log(`Value: ${value}`);
 
 
 
//Intersection types allow you to combine multiple types into one. You can use the '&' operator to define an intersection type.
type Person = {
    name: string;
    age: number;
};
type EmployeeDetails = {
    employeeId: number;
    department: string;
};
type EmployeeInfo = Person & EmployeeDetails;  
let employee4: EmployeeInfo = {
    name: "Bob",
    age: 35,
    employeeId: 1234,
    department: "HR"
};
console.log(`Employee Name: ${employee4.name}, Age: ${employee4.age}, Employee ID: ${employee4.employeeId}, Department: ${employee4.department}`);  
 export {};