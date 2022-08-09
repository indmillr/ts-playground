// Function syntax

const getFullName = (name: string, surname: string): string => {
  return (name = " " + surname);
};

console.log(getFullName("Ian", "Miller"));

// ----- Interfaces ----- //

// this is a reusable interface for all 'users'
// by default, all props are mandatory

interface UserInterface {
  // using postfix 'Interface' convention separates Interface and Class ids
  name: string;
  age?: number; // the '?' makes the 'age' prop optional
  getMessage(): string;
}

const user: UserInterface = {
  name: "Ian",
  age: 37,
  getMessage() {
    return "Hello" + name;
  },
};

const user2: UserInterface = {
  name: "Jack",
  getMessage() {
    return "Hello" + name;
  },
};

console.log(user.name);

// ----- Union Operator ----- //
interface UserInterface2 {
  name: string;
  surname: string;
}

let username: string = "alex";
let pagename: string | number = "1"; // allows 'pagename' to be a str OR a num
let errorMessage: string | null = null; // 'errorMessage' can be str OR null, and assigned null by default
let user3: UserInterface2 | null; // custom Interface

let someProp: string | number | null | undefined | string[] | object; // examples
