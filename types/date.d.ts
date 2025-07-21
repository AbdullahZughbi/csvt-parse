/**
 * Date type validator
 */
import { TypeValidator } from './index';
export declare class DateValidator implements TypeValidator {
    validate(value: string): boolean;
    parse(value: string): Date;
    serialize(value: any): string;
}
//# sourceMappingURL=date.d.ts.map