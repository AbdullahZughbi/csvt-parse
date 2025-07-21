/**
 * Validation utilities
 */
import { SupportedType, TypeValidator, CSVTColumn } from '../types';
export declare function getValidator(type: SupportedType): TypeValidator;
export declare function validateValue(value: string, column: CSVTColumn, lineNumber?: number, processEscapes?: boolean): any;
export declare function serializeValue(value: any, column: CSVTColumn): string;
export declare function isSupportedType(type: string): type is SupportedType;
//# sourceMappingURL=validation.d.ts.map