/**
 * Error classes for CSVT parsing
 */
export declare class CSVTError extends Error {
    readonly code: string;
    readonly line: number | undefined;
    readonly column: string | undefined;
    constructor(message: string, code?: string, line?: number, column?: string);
}
export declare class ValidationError extends CSVTError {
    readonly expectedType: string;
    readonly actualValue: any;
    constructor(message: string, expectedType: string, actualValue: any, line?: number, column?: string);
}
export declare class ParseError extends CSVTError {
    readonly rawData: string;
    constructor(message: string, rawData: string, line?: number, column?: string);
}
export declare class FileError extends CSVTError {
    readonly filename: string;
    readonly operation: 'read' | 'write';
    constructor(message: string, filename: string, operation: 'read' | 'write');
}
//# sourceMappingURL=errors.d.ts.map