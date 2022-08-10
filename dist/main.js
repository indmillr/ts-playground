var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// All generic Data Types are written inside '<>'
var addId = function (obj) {
    // T by default should be an object
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
// Must provide generic type
var user = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var user2 = {
    name: "John",
    data: ["foo", "bar", "baz"]
};
// Explicit declarations are easier to read
var result = addId(user);
console.log("result", result);
