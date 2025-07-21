/**
 * CHAR(n) type validator - Fixed-length string, padded to exact length
 */
import { TypeValidator } from './index';
export declare class CharValidator implements TypeValidator {
    validate(value: string, options?: {
        length?: number;
    }): boolean;
    parse(value: string, options?: {
        length?: number;
    }): string;
    serialize(value: any, options?: {
        length?: number;
    }): string;
}
//# sourceMappingURL=char.d.ts.map