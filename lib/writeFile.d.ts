/**
 * File writing functionality
 */
import { CSVTColumn, CSVTOptions } from '../types';
export declare function writeFile(filename: string, data: any[], columns: CSVTColumn[], options?: Omit<CSVTOptions, 'skipEmptyLines' | 'trim' | 'strict'>): Promise<void>;
export declare function writeFileSync(filename: string, data: any[], columns: CSVTColumn[], options?: Omit<CSVTOptions, 'skipEmptyLines' | 'trim' | 'strict'>): void;
export declare function serializeCSVT(data: any[], columns: CSVTColumn[], options?: Omit<CSVTOptions, 'skipEmptyLines' | 'trim' | 'strict'>): string;
//# sourceMappingURL=writeFile.d.ts.map