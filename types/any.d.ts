/**
 * Any type validator - accepts all values
 */
import { TypeValidator } from './index';
export declare class AnyValidator implements TypeValidator {
    validate(_value: string): boolean;
    parse(value: string): any;
    serialize(value: any): string;
}
//# sourceMappingURL=any.d.ts.map