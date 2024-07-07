export const greet = (name: string): string => {
    let res:string = `Hello, ${name}!`;
    console.log(res)
    return res;
};

export interface PasswordOptions {
    Length: number;
    Numbers?: boolean;
    Uppercase?: boolean;
    Lowercase?: boolean;
    ExcludeSimilarCharacters?: boolean;
    SpecialCharacters?: boolean | string;
}

export class PasswordGenerator {
    private charset: string;
    private PasswordOptions: PasswordOptions;
    constructor(PasswordOptions?: PasswordOptions|number) {
        this.PasswordOptions = {Length:10};
        this.charset = '';
        this.SetPasswordOptions(PasswordOptions);
    }
    private DefaultPasswordOptions(): PasswordOptions {
        return {
            Length: 10,
            Numbers: true,
            Uppercase: true,
            Lowercase: true,
            ExcludeSimilarCharacters: false,
            SpecialCharacters: '!"#$%&\'()*+,-./:;<=>?@[\\]^_{|}~'
        };
    }
    public SetPasswordOptions(PasswordOptions?: PasswordOptions|number): void {
        if (typeof PasswordOptions === 'undefined'){
            this.PasswordOptions = this.DefaultPasswordOptions();
        }
        else if (typeof PasswordOptions === 'number' && PasswordOptions >= 1){
            this.PasswordOptions = {Length: PasswordOptions};
        }
        else if (typeof PasswordOptions === 'object'){
            this.PasswordOptions = PasswordOptions;
        }
        this.charset = '';
        if (this.PasswordOptions.Numbers!=false) {
            this.charset += '0123456789';
        }
        if (this.PasswordOptions.Uppercase!=false){
            for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i=i+1) {
                this.charset += String.fromCharCode(i);
            }
        }
        if (this.PasswordOptions.Lowercase!=false){
            for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i=i+1) {
                this.charset += String.fromCharCode(i);
            }
        }
        if (this.PasswordOptions.ExcludeSimilarCharacters==true){
            this.charset = this.charset.replace('0', '');
            this.charset = this.charset.replace('O', '');
            this.charset = this.charset.replace('I', '');
            this.charset = this.charset.replace('l', '');
        }
        if (typeof this.PasswordOptions.SpecialCharacters === 'string'){
            this.charset += this.PasswordOptions.SpecialCharacters;
        }
        else if (this.PasswordOptions.SpecialCharacters!=false){
            this.charset += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        }

    }
    public generate(): string {
        let res = '';
        for (let i = 0; i < this.PasswordOptions.Length; i++) {
            res += this.charset.charAt(Math.floor(Math.random() * this.charset.length));
        }
        return res;
    }
}
/*
    Example:
*/