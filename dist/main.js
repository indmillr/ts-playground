// ----- VOID Type ----- //
var doSomething = function () {
    console.log("doSomething");
};
var foo = "foo"; // 'any' turns off TS check -- try to avoid ANY
// ANY is not a solution, but a cause to bigger future problems
console.log(foo.bar());
