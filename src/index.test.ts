import { PasswordGenerator, PasswordOptions } from './index';

describe('PasswordGenerator', () => {
    test('Check default password',()=>{
        let PasGen = new PasswordGenerator();
        let pass = PasGen.generate();
        expect(pass.length).toEqual(10);
        // check invalid characters
        expect(pass).toMatch(/^[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]*$/);
    });
    for (let i = 0; i<5; i++){
        test('Password with length type 1',()=>{
            let rnd = Math.floor(Math.random() * 20)+1;
            let PasGen = new PasswordGenerator({Length: rnd});
            let pass = PasGen.generate();
            expect(pass.length).toEqual(rnd);
            expect(pass).toMatch(/^[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]*$/);
        });
    }
    for (let i = 0; i<5; i++){
        test('Password with length type 2',()=>{
            let rnd = Math.floor(Math.random()*20)+1;
            let PasGen = new PasswordGenerator(rnd);
            let pass = PasGen.generate();
            expect(pass.length).toEqual(rnd);
        });
    }
    test('Password with PassOptions',()=>{
        let specChar = "@#$";
        let PasGen = new PasswordGenerator({
            Length:15,
            Numbers: false,
            Lowercase: false,
            ExcludeSimilarCharacters: true,
            SpecialCharacters:specChar
        });
        let pass = PasGen.generate();
        expect(pass.length).toEqual(15);
        expect(pass).toMatch(/^[A-Z!"@#$]*$/);
    });
    test('Password with PassOptions 2',()=>{
        let PasGen = new PasswordGenerator({
            Length:15,
            Numbers: false,
            Lowercase: false,
            ExcludeSimilarCharacters: true,
            SpecialCharacters:true
        });
        let pass = PasGen.generate();
        expect(pass.length).toEqual(15);
        expect(pass).toMatch(/^[A-Z!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]*$/);
    });
    test('Password with PassOptions 3',()=>{
        let PasGen = new PasswordGenerator({
            Length:15,
            Numbers: false,
            Uppercase:true,
            Lowercase: false,
            ExcludeSimilarCharacters: true,
            SpecialCharacters:false
        });
        let pass = PasGen.generate();
        expect(pass.length).toEqual(15);
        expect(pass).toMatch(/^[A-Z]*$/);
    });
});
