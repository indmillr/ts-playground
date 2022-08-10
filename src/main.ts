// All generic Data Types are written inside '<>'
const addId = <T extends object>(obj: T) => {
  // T by default should be an object
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

// Must provide generic type
const user: UserInterface<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const user2: UserInterface<string[], string> = {
  name: "John",
  data: ["foo", "bar", "baz"],
  meta: "foo",
};

// Explicit declarations are easier to read
const result = addId<UserInterface>(user);
console.log("result", result);
