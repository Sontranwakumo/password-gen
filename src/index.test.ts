import { PasswordGenerator, PasswordOptions } from './index';
import Fuzz from 'jest-fuzz';
describe('PasswordGenerator', () => {
    interface Obj{
        [key:string]:any;
    }
    const obj:Obj = {
        Numbers : "0123456789",
        Lowercase : "abcdefghijklmnopqrstuvwxyz",
        Uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        SpecialCharacters : '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
    }
    function checkvalid(cstring: string,charset:string):boolean{
        console.log(cstring);
        console.log(charset);
        let Setc = new Set(charset);
        for (const i of cstring){
            if (!Setc.has(i)){
                return false;
            }
        }
        return true;
    }
    const PassOpFuzzer = Fuzz.Fuzzer({
        Length: Fuzz.int({min:1,max:20}),
        Numbers: Fuzz.bool(),
        Uppercase: Fuzz.bool(),
        Lowercase: Fuzz.bool(),
        ExcludeSimilarCharacters: Fuzz.bool(),
        SpecialCharacters: Fuzz.bool()
    })
    Fuzz.test("Fuzz options test case",PassOpFuzzer(),(data:PasswordOptions) =>{
        let charset:string = '';
        for (const key in data){
            const value = data[key as keyof PasswordOptions];
            if (typeof value === "boolean" && obj){
                if (value === true){
                    charset += obj[key];
                }
                if (key === "ExcludeSimilarCharacters"){
                    charset.replace("0","");
                    charset.replace("O","");
                    charset.replace("I","");
                    charset.replace("l","");
                }
            }
        }
        let pass:string = new PasswordGenerator(data).generate();
        
        expect(checkvalid(pass,charset)).toBeTruthy();
    });
});
