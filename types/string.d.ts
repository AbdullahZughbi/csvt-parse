/**
 * String type validator
 */
import { TypeValidator } from './index';
export declare class StringValidator implements TypeValidator {
    validate(_value: string): boolean;
    parse(value: string): string;
    serialize(value: any): string;
}
//# sourceMappingURL=string.d.ts.map