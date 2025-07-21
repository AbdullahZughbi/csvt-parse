/**
 * JSON type validator
 */
import { TypeValidator } from './index';
export declare class JsonValidator implements TypeValidator {
    validate(value: string): boolean;
    parse(value: string): any;
    serialize(value: any): string;
}
//# sourceMappingURL=json.d.ts.map