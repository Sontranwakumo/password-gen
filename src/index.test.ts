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
        let Setc = new Set(charset);
        for (const i of cstring){
            if (!Setc.has(i)){
                return false;
            }
        }
        return true;
    }
    const PassOpFuzzer = Fuzz.Fuzzer({
        Length: Fuzz.int({min:3,max:20}),
        Numbers: Fuzz.bool(),
        Uppercase: Fuzz.bool(),
        Lowercase: Fuzz.bool(),
        ExcludeSimilarCharacters: Fuzz.bool(),
        SpecialCharacters: Fuzz.bool()
    })
    Fuzz.test("Fuzz options test case",PassOpFuzzer(),(data:PasswordOptions) =>{
        let charset:string = '';
        if (data.Numbers==false && data.Lowercase==false && data.Uppercase==false && (data.SpecialCharacters==="" || data.SpecialCharacters===false)){
            data = {
                Length:10,
                Numbers: true,
                Uppercase: true,
                Lowercase: true,
                ExcludeSimilarCharacters: false,
                SpecialCharacters: true
            }
        }
        for (const key in data){
            const value = data[key as keyof PasswordOptions];
            if (typeof value === "boolean" && obj){
                if (value === true && key != "ExcludeSimilarCharacters"){
                    charset += obj[key];
                }
                if (key === "ExcludeSimilarCharacters" && value === true){
                    charset.replace("0","");
                    charset.replace("O","");
                    charset.replace("o","");
                    charset.replace("I","");
                    charset.replace("i","");
                    charset.replace("l","");
                }
            }
        }
        let PasGen = new PasswordGenerator(data);
        let pass:string = PasGen.generate();
        try{
            expect(pass.length).toEqual(data.Length);
            expect(checkvalid(pass,charset)).toBeTruthy();
        }catch(error){
            console.log(pass);
            
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    console.log(`Key: ${key}, Value: ${data[key as keyof PasswordOptions]}`);
                }
            }
            throw error
        }
    });
    
});
