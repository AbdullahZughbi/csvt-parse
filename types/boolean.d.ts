/**
 * Boolean type validator
 */
import { TypeValidator } from './index';
export declare class BooleanValidator implements TypeValidator {
    private static readonly TRUE_VALUES;
    private static readonly FALSE_VALUES;
    validate(value: string): boolean;
    parse(value: string): boolean;
    serialize(value: any): string;
}
//# sourceMappingURL=boolean.d.ts.map