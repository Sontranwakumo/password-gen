export declare const greet: (name: string) => string;
export declare class PasswordOptions {
    length: number;
    constructor();
    toString(): string;
}
export declare class PasswordGenerator {
    private static charset;
    constructor(length: number, charset: string);
    static generate(length: number): string;
}
