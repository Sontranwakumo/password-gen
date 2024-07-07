"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordGenerator = exports.greet = void 0;
var greet = function (name) {
    var res = "Hello, ".concat(name, "!");
    console.log(res);
    return res;
};
exports.greet = greet;
var PasswordGenerator = /** @class */ (function () {
    function PasswordGenerator(PasswordOptions) {
        this.PasswordOptions = { Length: 10 };
        this.charset = '';
        this.SetPasswordOptions(PasswordOptions);
    }
    PasswordGenerator.prototype.DefaultPasswordOptions = function () {
        return {
            Length: 10,
            Numbers: true,
            Uppercase: true,
            Lowercase: true,
            ExcludeSimilarCharacters: false,
            SpecialCharacters: '!"#$%&\'()*+,-./:;<=>?@[\\]^_{|}~'
        };
    };
    PasswordGenerator.prototype.SetPasswordOptions = function (PasswordOptions) {
        if (typeof PasswordOptions === 'undefined') {
            this.PasswordOptions = this.DefaultPasswordOptions();
        }
        else if (typeof PasswordOptions === 'number' && PasswordOptions >= 1) {
            this.PasswordOptions = { Length: PasswordOptions };
        }
        else if (typeof PasswordOptions === 'object') {
            this.PasswordOptions = PasswordOptions;
        }
        this.charset = '';
        if (this.PasswordOptions.Numbers != false) {
            this.charset += '0123456789';
        }
        if (this.PasswordOptions.Uppercase != false) {
            for (var i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i = i + 1) {
                this.charset += String.fromCharCode(i);
            }
        }
        if (this.PasswordOptions.Lowercase != false) {
            for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i = i + 1) {
                this.charset += String.fromCharCode(i);
            }
        }
        if (this.PasswordOptions.ExcludeSimilarCharacters == true) {
            this.charset = this.charset.replace('0', '');
            this.charset = this.charset.replace('O', '');
            this.charset = this.charset.replace('I', '');
            this.charset = this.charset.replace('l', '');
        }
        if (typeof this.PasswordOptions.SpecialCharacters === 'string') {
            this.charset += this.PasswordOptions.SpecialCharacters;
        }
        else if (this.PasswordOptions.SpecialCharacters != false) {
            this.charset += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        }
    };
    PasswordGenerator.prototype.generate = function () {
        var res = '';
        for (var i = 0; i < this.PasswordOptions.Length; i++) {
            res += this.charset.charAt(Math.floor(Math.random() * this.charset.length));
        }
        return res;
    };
    return PasswordGenerator;
}());
exports.PasswordGenerator = PasswordGenerator;
/*
    Example:
*/ 
