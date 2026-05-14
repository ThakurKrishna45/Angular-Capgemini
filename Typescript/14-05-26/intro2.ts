//Type Inference in TypeScript allows the compiler to automatically determine the type of a variable based on its initial value or usage.
 
let counter=0;// TypeScript infers the type of 'counter' as 'number' based on the initial value assigned to it.
 
console.log(`Counter: ${counter}`);
//counter="abc"; // Error: Type 'string' is not assignable to type 'number'.
console.log(`Counter: ${counter}`);
 
interface Product
{
    id: number;
    name: string;
    price: number;
}
 
function getProduct(id: number) //no return type annotation,
//  TypeScript infers the return type based on the returned object structure.
{
    return {
        id: id,
        name: `Product ${id}`,
        price: id * 10
    };
}
 
const product2 = getProduct(1);
console.log(`Product ID: ${product2.id}, Name: ${product2.name}, Price: ${product2.price}`);
 
 
//Numbers In TypeScript can be represented in various formats, including decimal, hexadecimal, binary, and octal.
//Javascript 'Number' type is used to represent all these formats.
let decimal: number = 42;
let hexadecimal: number = 0x2A; // Hexadecimal representation of 42
let binary: number = 0b101010; // Binary representation of 42
let octal: number = 0o52; // Octal representation of 42
console.log(`Decimal: ${decimal}, Hexadecimal: ${hexadecimal}, Binary: ${binary}, Octal: ${octal}`);
 
 
//String In TypeScript can be represented using single quotes, double quotes, or template literals.
let singleQuoteString: string = 'Hello, World!';
let doubleQuoteString: string = "Hello, TypeScript!";
let templateLiteralString: string = `The value of decimal is ${decimal}`;
 
//Boolean In TypeScript is represented using the 'boolean' type, which can have two values: 'true' or 'false'.
let isAvailable: boolean = true;
let isOutOfStock: boolean = false;
console.log(`Is Available: ${isAvailable}, Is Out of Stock: ${isOutOfStock}`);
 
 
//Object Types in TypeScript can be defined using interfaces or type aliases. They allow you to specify the structure of an object, including its properties and their types.
let employee: object;
employee = {
   firstname: "John",
   lastname: "Doe",
   age: 30,
   jobTitle: "Software Engineer"
};
console.log(`Employee: ${JSON.stringify(employee)}`);
console.log(`Employee firstname $(employee.firstname) `); // Error: Property 'firstname' does not exist on type 'object'.ts(2339    )
//employee ="This is a string, not an object"; // Type 'string' is not assignable to type 'object'.ts(2322)
 
let employee2: {
    firstname: string;
    lastname: string;
    age: number;
    jobTitle: string;
}=
{
   firstname: "John",
   lastname: "Doe",
   age: 30,
   jobTitle: "Software Engineer"
};
 
 
//Typescript has empty type , specified using {}
let vacantPosition: {};
// vacantPosition.title = "Software Engineer"; // Error: Property 'title' does not exist on type '{}'.ts(2339)
 export {};