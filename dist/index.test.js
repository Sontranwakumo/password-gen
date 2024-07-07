"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('PasswordGenerator', function () {
    test('Check default password', function () {
        var PasGen = new index_1.PasswordGenerator();
        var pass = PasGen.generate();
        expect(pass.length).toEqual(10);
        // check invalid characters
        expect(pass).toMatch(/^[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]*$/);
    });
    for (var i = 0; i < 5; i++) {
        test('Password with length type 1', function () {
            var rnd = Math.floor(Math.random() * 20) + 1;
            var PasGen = new index_1.PasswordGenerator({ Length: rnd });
            var pass = PasGen.generate();
            expect(pass.length).toEqual(rnd);
            expect(pass).toMatch(/^[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]*$/);
        });
    }
    for (var i = 0; i < 5; i++) {
        test('Password with length type 2', function () {
            var rnd = Math.floor(Math.random() * 20) + 1;
            var PasGen = new index_1.PasswordGenerator(rnd);
            var pass = PasGen.generate();
            expect(pass.length).toEqual(rnd);
        });
    }
    test('Password with PassOptions', function () {
        var specChar = "@#$";
        var PasGen = new index_1.PasswordGenerator({
            Length: 15,
            Numbers: false,
            Lowercase: false,
            ExcludeSimilarCharacters: true,
            SpecialCharacters: specChar
        });
        var pass = PasGen.generate();
        expect(pass.length).toEqual(15);
        expect(pass).toMatch(/^[A-Z!"@#$]*$/);
    });
    test('Password with PassOptions 2', function () {
        var PasGen = new index_1.PasswordGenerator({
            Length: 15,
            Numbers: false,
            Lowercase: false,
            ExcludeSimilarCharacters: true,
            SpecialCharacters: true
        });
        var pass = PasGen.generate();
        expect(pass.length).toEqual(15);
        expect(pass).toMatch(/^[A-Z!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]*$/);
    });
    test('Password with PassOptions 3', function () {
        var PasGen = new index_1.PasswordGenerator({
            Length: 15,
            Numbers: false,
            Uppercase: true,
            Lowercase: false,
            ExcludeSimilarCharacters: true,
            SpecialCharacters: false
        });
        var pass = PasGen.generate();
        expect(pass.length).toEqual(15);
        expect(pass).toMatch(/^[A-Z]*$/);
    });
});
