"use strict";
// ----- Basic Types
let id = 5;
let company = "Ian Miller";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// ----- Tuple
let person = [1, "Ian", true];
// ----- Tuple Array
let employee;
employee = [
    [1, "Ian"],
    [2, "Oliver"],
    [3, "Lilah"],
];
// ----- Union
let pid;
pid = "22";
// ----- Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// ----- Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// ----- Functions
function addNum(x, y) {
    return x + y;
}
// ----- Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// ----- Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Kristin", "Developer");
// ----- Generics
function getArray(items) {
    // generic placeholder T is replaced when function is called
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]); // <number> replaces T in getArray
let strArray = getArray(["brad", "john", "jill"]); // <string> replaces T in getArray
numArray.push(2);
