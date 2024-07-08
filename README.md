# Password generator

A typescript library for `generating random passwords with various customizable options.

### Features
- Generate passwords with custom length.
- Customize include or exclude numbers, lowercase, uppercase letters, special characters. Exclude similar characters.

### Installation
To use this function in your project, first install package:
```
npm i @artteiv.wkm/password-generator
```


### Usage
```
import {PasswordGenerator,PasswordOptions} from '@artteiv.wkm/password-generator';

//Generate a password with default settings
let PasGen = new PasswordGenerator();
console.log(PasGen.generate());

//Generate a password with a specific length
PasGen.SetPasswordOptions(12);
//or
PasGen.SetPasswordOptions({Length:12});
console.log(PasGen.generate());

//Generate a password without numbers
// Notice that you always have to set length parameter
PasGen.SetPasswordOptions({Length:12, Numbers:false })

// Generate a password without lowecase letters
PasGen.SetPasswordOptions({Length:12,Lowercase:false})

// Generate a password without uppercase letters
PasGen.SetPasswordOptions({Length:12,Lowercase:false})

// Generate a password without SpecialCharacter
PasGen.SetPasswordOptions({Length:12,SpecialCharacters:false})

// Generate a password with your customize SpecialCharacter
PasGen.SetPasswordOptions({Length:12,SpecialCharacters:"!@#$%"})

//Generate a password exclude similar characters.
PasGen.SetPasswordOptions({Length:12,ExcludeSimilarCharacters:true})

// Custome setting with PasswordOptions
const PassOptions:PasswordOptions = {
    Length: 12,
    Numbers: true,
    Lowercase: true,
    Uppercase: true,
    SpecialCharacters: "!%$#@",
    ExcludeSimilarCharacters: false
}
PasGen.SetPasswordOptions(PassOptions);
// You can also declare PasswordGenerator like this
PasGen = new PasswordGenerator(PassOptions);

console.log(PasGen.generate());
```
### API Reference

`PasswordGenerator.SetPasswordOptions`
Config PasswordGenerator
```
const PasGen = new PasswordGenerator();
const PassOptions:PasswordOptions = {
    Length: 12,
    Numbers: true,
    Lowercase: true,
    Uppercase: true,
    SpecialCharacters: "!%$#@",
    ExcludeSimilarCharacters: false
}
PasGen.SetPasswordOptions(PassOptions);
```
- Length: The length of the password (default: 10)
- Numbers: Include number or not (default: true)
- Lowercase: Include lowercase letter or not (default: true)
- Uppercase: Include uppercase letter or not (default: true)
- SpecialCharacter: Include special character or not, or your customize special character (default: true)
- excludeSimilarCharacters: Exclude similar characters (e.g. 'I','l','0','O');

`PasswordGenerator.generate`
Generate password

```
const password:string = PasGen.generate();
console.log(password)
```
- Return: `string`

### License

This project is licensed under the MIT License

