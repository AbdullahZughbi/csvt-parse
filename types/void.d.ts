/**
 * Void type validator - represents null/undefined values
 */
import { TypeValidator } from './index';
export declare class VoidValidator implements TypeValidator {
    validate(value: string): boolean;
    parse(value: string): null;
    serialize(value: any): string;
}
//# sourceMappingURL=void.d.ts.map