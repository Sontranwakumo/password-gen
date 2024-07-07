"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordGenerator = exports.PasswordOptions = exports.greet = void 0;
var greet = function (name) {
    var res = "Hello, ".concat(name, "!");
    console.log(res);
    return res;
};
exports.greet = greet;
var PasswordOptions = /** @class */ (function () {
    function PasswordOptions() {
        this.length = length;
    }
    PasswordOptions.prototype.toString = function () {
        return "PasswordOptions: length = ".concat(this.length);
    };
    return PasswordOptions;
}());
exports.PasswordOptions = PasswordOptions;
var option = { length: 10 };
console.log(option.toString());
var PasswordGenerator = /** @class */ (function () {
    function PasswordGenerator(length, charset) {
        // this.length = length;
        // this.charset = charset;
    }
    PasswordGenerator.generate = function (length) {
        var res = '';
        for (var i = 0; i < this.length; i++) {
            res += this.charset.charAt(Math.floor(Math.random() * this.charset.length));
        }
        return res;
    };
    return PasswordGenerator;
}());
exports.PasswordGenerator = PasswordGenerator;
// mục tiêu là chỉ cần gọi hàm với tiêu chí là chỉ truyền vào đúng một quy định
