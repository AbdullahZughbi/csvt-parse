/**
 * VARCHAR(n) type validator - Variable-length string with maximum length
 */
import { TypeValidator } from './index';
export declare class VarcharValidator implements TypeValidator {
    validate(value: string, options?: {
        maxLength?: number;
    }): boolean;
    parse(value: string, _options?: {
        maxLength?: number;
    }): string;
    serialize(value: any, options?: {
        maxLength?: number;
    }): string;
}
//# sourceMappingURL=varchar.d.ts.map