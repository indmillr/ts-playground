// All generic Data Types are written inside '<>'
const addId = <T>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const user = {
  name: "Jack",
};

const result = addId(user);
console.log("result", result);
