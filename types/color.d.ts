/**
 * Color validator - hex (#RGB, #RRGGBB) or CSS named colors
 */
import { TypeValidator } from './index';
export declare class ColorValidator implements TypeValidator {
    validate(value: string): boolean;
    parse(value: string): string;
    serialize(value: any): string;
}
//# sourceMappingURL=color.d.ts.map