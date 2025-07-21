/**
 * CSVT-Parse - CSV with Type definitions parser
 * Copyright (c) 2025 - All rights reserved
 *
 * Main entry point for the csvt-parse library
 */
import { parseCSVT, parseCSVTSync } from './lib/parse';
import { readFile, readFileSync } from './lib/readFile';
import { writeFile, writeFileSync } from './lib/writeFile';
import { validateValue } from './lib/validation';
import { CSVTError, ValidationError, ParseError } from './lib/errors';
import { CSVTOptions, CSVTColumn, CSVTResult, TypeValidator, SupportedType } from './types';
export { parseCSVT, parseCSVTSync, readFile, readFileSync, writeFile, writeFileSync, validateValue };
export { CSVTError, ValidationError, ParseError };
export { CSVTOptions, CSVTColumn, CSVTResult, TypeValidator, SupportedType };
declare const _default: {
    parse: typeof parseCSVT;
    parseSync: typeof parseCSVTSync;
    readFile: typeof readFile;
    readFileSync: typeof readFileSync;
    writeFile: typeof writeFile;
    writeFileSync: typeof writeFileSync;
    validateValue: typeof validateValue;
    CSVTError: typeof CSVTError;
    ValidationError: typeof ValidationError;
    ParseError: typeof ParseError;
};
export default _default;
//# sourceMappingURL=index.d.ts.map