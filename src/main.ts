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
