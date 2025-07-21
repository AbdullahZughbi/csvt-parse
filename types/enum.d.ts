/**
 * Enum type validator
 */
import { TypeValidator } from './index';
export declare class EnumValidator implements TypeValidator {
    validate(value: string, options?: {
        enumValues?: string[];
    }): boolean;
    parse(value: string, options?: {
        enumValues?: string[];
    }): string;
    serialize(value: any, options?: {
        enumValues?: string[];
    }): string;
}
//# sourceMappingURL=enum.d.ts.map