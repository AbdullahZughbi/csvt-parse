/**
 * Type definitions and validators
 */
export interface CSVTColumn {
    name: string;
    type: SupportedType;
    enumValues?: string[];
    unionTypes?: SupportedType[];
    maxLength?: number;
    length?: number;
}
export interface CSVTOptions {
    delimiter?: string;
    quote?: string;
    escape?: string;
    skipEmptyLines?: boolean;
    trim?: boolean;
    strict?: boolean;
    processEscapes?: boolean;
}
export interface CSVTResult {
    data: any[];
    columns: CSVTColumn[];
    errors: any[];
}
export type SupportedType = 'string' | 'number' | 'boolean' | 'array' | 'json' | 'void' | 'date' | 'datetime' | 'url' | 'hexcolor' | 'email' | "time" | "rgba" | "color" | "uuid" | "ipaddress" | "percentage" | "enum" | "union" | "any" | "text" | "varchar" | "char";
export interface TypeValidator {
    validate(value: string, options?: any): boolean;
    parse(value: string, options?: any): any;
    serialize(value: any, options?: any): string;
}
export { StringValidator } from './string';
export { NumberValidator } from './number';
export { BooleanValidator } from './boolean';
export { ArrayValidator } from './array';
export { JsonValidator } from './json';
export { VoidValidator } from "./void";
export { DateValidator } from "./date";
export { DateTimeValidator } from "./datetime";
export { UrlValidator } from "./url";
export { HexColorValidator } from "./hexcolor";
export { EmailValidator } from "./email";
export { TimeValidator } from './time';
export { RgbaValidator } from './rgba';
export { ColorValidator } from './color';
export { UUIDValidator } from "./uuid";
export { IPAddressValidator } from "./ipaddress";
export { PercentageValidator } from "./percentage";
export { EnumValidator } from "./enum";
export { UnionValidator } from "./union";
export { AnyValidator } from "./any";
export { TextValidator } from "./text";
export { VarcharValidator } from "./varchar";
export { CharValidator } from "./char";
//# sourceMappingURL=index.d.ts.map