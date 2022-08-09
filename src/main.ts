// ----- VOID Type ----- //

const doSomething = (): void => {
  console.log("doSomething");
};

let foo: any = "foo"; // 'any' turns off TS check -- try to avoid ANY
// ANY is not a solution, but a cause to bigger future problems
console.log(foo.bar());
