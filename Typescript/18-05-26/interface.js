"use strict";
//interfaces - Typescruipt interfaces defines the contract within the code.
// They also provide the explicit names for type checking and code readability.
//traditional way of defining an object type
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
const person = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person)); // Output: John Doe
function getFullNameWithInterface(person) {
    if (person.age) {
        console.log(`Age: ${person.age}`);
    }
    return `${person.firstName} ${person.lastName}`;
}
const personWithInterface = { firstName: "Jack", lastName: "Doe", age: 30, id: 1 };
console.log(getFullNameWithInterface(personWithInterface)); // Output: Jack Doe and Age: 30
const personWithoutAge = { firstName: "Jane", lastName: "Doe", id: 2 };
console.log(getFullNameWithInterface(personWithoutAge)); // Output: Jane Doe
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
let format;
format = function (str, isUpperCase) {
    return isUpperCase ? str.toUpperCase() : str.toLowerCase();
};
console.log(format("Hello World", true)); // Output: HELLO WORLD
console.log(format("Hello World", false)); // Output: hello world
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(5);
console.log(`Area of the circle: ${circle.area()}`); // Output: Area of the circle: 78.53981633974483
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(4, 6);
console.log(`Area of the rectangle: ${rectangle.area()}`); // Output: Area of the rectangle: 24
class ColoredCircle {
    radius;
    color;
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
        this.radius = radius;
        this.color = color;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    doColor(color) {
        this.color = color;
        console.log(`Circle color changed to: ${this.color}`);
    }
}
const coloredCircle = new ColoredCircle(5, "red");
console.log(`Area of the colored circle: ${coloredCircle.area()}`);
coloredCircle.doColor("blue"); // Output: Circle color changed to: blue
class ColoredRectangle {
    width;
    height;
    color;
    borderWidth;
    constructor(width, height, color, borderWidth) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.borderWidth = borderWidth;
        this.width = width;
        this.height = height;
        this.color = color;
        this.borderWidth = borderWidth;
    }
    area() {
        return this.width * this.height;
    }
    doColor(color) {
        this.color = color;
        console.log(`Rectangle color changed to: ${this.color}`);
    }
    doBorderWidth(width) {
        this.borderWidth = width;
        console.log(`Rectangle border width changed to: ${this.borderWidth}`);
    }
}
const coloredRectangle = new ColoredRectangle(4, 6, "green", 2);
console.log(`Area of the colored rectangle: ${coloredRectangle.area()}`);
coloredRectangle.doColor("yellow");
coloredRectangle.doBorderWidth(4);
//Interface can extend the class
class PersonClass {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class EmployeeClass extends PersonClass {
    employeeId;
    constructor(name, age, employeeId) {
        super(name, age);
        this.employeeId = employeeId;
        this.employeeId = employeeId;
    }
    doWork() {
        console.log(`${this.name} is working.`);
    }
}
const employee = new EmployeeClass("John Doe", 30, 12345);
employee.doWork(); // Output: John Doe is working.
// class EmployeeImpl implements EmployeeInterface  //Error: Class 'EmployeeImpl' incorrectly implements interface 'EmployeeInterface'.    
// {
//         name: string;
//         age: number;
//         employeeId: number;
//        constructor(name: string, age: number, employeeId: number) {
//         this.name = name;
//         this.age = age;
//         this.employeeId = employeeId;
//     }
//     doWork(): void {
//         console.log(`${this.name} is working.`);
//     }
// }
// const employeeImpl = new EmployeeImpl("Jane Doe", 28, 54321);
// employeeImpl.doWork(); // Output: Jane Doe is working.
