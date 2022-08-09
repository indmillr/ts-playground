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
var username = "alex";
var pagename = "1"; // allows 'pagename' to be a str OR a num
var errorMessage = null; // 'errorMessage' can be str OR null, and assigned null by default
var user3; // custom Interface
var someProp; // examples
