export declare const greet: (name: string) => string;
export interface PasswordOptions {
    Length: number;
    Numbers?: boolean;
    Uppercase?: boolean;
    Lowercase?: boolean;
    ExcludeSimilarCharacters?: boolean;
    SpecialCharacters?: boolean | string;
}
export declare class PasswordGenerator {
    private charset;
    private PasswordOptions;
    constructor(PasswordOptions?: PasswordOptions | number);
    private DefaultPasswordOptions;
    SetPasswordOptions(PasswordOptions?: PasswordOptions | number): void;
    generate(): string;
}
