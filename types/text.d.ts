/**
 * TEXT type validator - Unlimited text (alias to string with better semantics)
 */
import { TypeValidator } from './index';
export declare class TextValidator implements TypeValidator {
    validate(_value: string): boolean;
    parse(value: string): string;
    serialize(value: any): string;
}
//# sourceMappingURL=text.d.ts.map