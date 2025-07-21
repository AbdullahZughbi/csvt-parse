/**
 * DateTime type validator
 */
import { TypeValidator } from './index';
export declare class DateTimeValidator implements TypeValidator {
    validate(value: string): boolean;
    parse(value: string): Date;
    serialize(value: any): string;
}
//# sourceMappingURL=datetime.d.ts.map