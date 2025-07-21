/**
 * Union type validator
 */
import { TypeValidator, SupportedType } from './index';
export declare class UnionValidator implements TypeValidator {
    validate(value: string, options?: {
        unionTypes?: SupportedType[];
    }): boolean;
    parse(value: string, options?: {
        unionTypes?: SupportedType[];
    }): any;
    serialize(value: any, options?: {
        unionTypes?: SupportedType[];
    }): string;
}
//# sourceMappingURL=union.d.ts.map