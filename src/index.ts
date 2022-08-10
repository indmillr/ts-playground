// ----- Basic Types
let id: number = 5;
let company: string = "Ian Miller";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// ----- Tuple
let person: [number, string, boolean] = [1, "Ian", true];

// ----- Tuple Array
let employee: [number, string][];

employee = [
  [1, "Ian"],
  [2, "Oliver"],
  [3, "Lilah"],
];

// ----- Union
let pid: string | number;
pid = "22";

// ----- Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// ----- Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// ----- Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// ----- Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// ----- Void
function log(message: string | number): void {
  console.log(message);
}

// ----- Interfaces  (when describing objects)
interface UserInterface {
  readonly id: number; // readonly can't be changed
  name: string;
  age?: number; // optional property marked with ?
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// ----- Classes
class Person implements PersonInterface {
  id: number; // private only accessible from within the Class
  name: string; // protected only accessible from within the Class or any extended Class

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Kristin", "Developer");

// ----- Generics
function getArray<T>(items: T[]): T[] {
  // generic placeholder T is replaced when function is called
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]); // <number> replaces T in getArray
let strArray = getArray<string>(["brad", "john", "jill"]); // <string> replaces T in getArray

numArray.push(2);
