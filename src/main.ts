// Function syntax

const getFullName = (name: string, surname: string): string => {
  return (name = " " + surname);
};

console.log(getFullName("Ian", "Miller"));

// ----- Interfaces ----- //

// this is a reusable interface for all 'users'
// by default, all props are mandatory
interface User {
  name: string;
  age?: number; // the '?' makes the 'age' prop optional
}

const user: User = {
  name: "Ian",
  age: 37,
};

const user2: User = {
  name: "Jack",
};

console.log(user.name);
