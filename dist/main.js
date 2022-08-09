// Function syntax
var getFullName = function (name, surname) {
    return (name = " " + surname);
};
console.log(getFullName("Ian", "Miller"));
var user = {
    name: "Ian",
    age: 37,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user.name);
