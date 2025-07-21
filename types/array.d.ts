/**
 * Array type validator
 */
import { TypeValidator } from './index';
export declare class ArrayValidator implements TypeValidator {
    validate(value: string): boolean;
    parse(value: string): any[];
    serialize(value: any): string;
}
//# sourceMappingURL=array.d.ts.map