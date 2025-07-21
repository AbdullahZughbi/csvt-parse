# CSVT-Parse

A powerful Node.js library for parsing and writing CSV files with typed column definitions. CSVT-Parse provides comprehensive type validation and robust error handling for working with structured CSV data.

## Features

- 🎯 **Typed Column Definitions**: Define column types directly in the CSV header (`name:string,age:number`)
- 🔍 **Comprehensive Type Validation**: Built-in validation for 20+ data types including primitives, dates, URLs, emails, UUIDs, and more
- 🔧 **Enum Types**: Define columns with restricted value sets (`status:enum(pending,approved,rejected)`)
- 🔀 **Union Types**: Support multiple types per column (`value:string|number|boolean`)
- 🌟 **Any Type**: Auto-detecting flexible type that infers the best match (`data:any`)
- 📁 **File I/O Support**: Read from and write to files with async/sync APIs
- 🛡️ **Error Handling**: Comprehensive error reporting with line and column context
- 🚀 **High Performance**: Optimized parsing with minimal overhead
- 📦 **TypeScript First**: Full TypeScript support with complete type definitions
- 🔒 **Source Protection**: Obfuscated distribution for commercial use

## Installation

```bash
npm install @abdullah_zughbi/csvt-parse
```

## Quick Start

### Basic Usage

```javascript
const csvt = require('@abdullah_zughbi/csvt-parse');

// Parse CSVT content with typed columns
const csvtContent = `name:string,age:number,active:boolean
"John Doe",30,true
"Jane Smith",25,false`;

const result = csvt.parseCSVTSync(csvtContent);
console.log(result.data);
// Output: [
//   { name: "John Doe", age: 30, active: true },
//   { name: "Jane Smith", age: 25, active: false }
// ]
```

### File Operations

```javascript
// Read from CSVT file
const fileData = csvt.readFileSync('data.csvt');
console.log(fileData.data);

// Write to CSVT file
const data = [
  { name: 'Alice', score: 95, active: true },
  { name: 'Bob', score: 87, active: false }
];

const columns = [
  { name: 'name', type: 'string' },
  { name: 'score', type: 'number' },
  { name: 'active', type: 'boolean' }
];

csvt.writeFileSync('output.csvt', data, columns);
```

### Complex Data Types

```javascript
// JSON objects and arrays
const complexCSVT = `user:string,preferences:json,history:array
"alice","{""theme"":""dark"",""lang"":""en""}","[""login"",""purchase""]"`;

const result = csvt.parseCSVTSync(complexCSVT);
console.log(result.data[0]);
// Output: {
//   user: "alice",
//   preferences: { theme: "dark", lang: "en" },
//   history: ["login", "purchase"]
// }
```

### Enum Types

```javascript
// Restricted value sets
const enumCSVT = `status:enum(pending,approved,rejected),priority:enum(low,medium,high)
"pending","high"
"approved","medium"
"rejected","low"`;

const enumResult = csvt.parseCSVTSync(enumCSVT);
console.log(enumResult.data);
// Output: [
//   { status: "pending", priority: "high" },
//   { status: "approved", priority: "medium" },
//   { status: "rejected", priority: "low" }
// ]
```

### Union Types

```javascript
// Multiple type options per column
const unionCSVT = `id:string|number,value:number|boolean,mixed:string|number|boolean
"user123",42,true
"456",3.14,"hello"
"789",0,false`;

const unionResult = csvt.parseCSVTSync(unionCSVT);
console.log(unionResult.data);
// Output: [
//   { id: "user123", value: 42, mixed: "true" },
//   { id: "456", value: 3.14, mixed: "hello" },
//   { id: "789", value: 0, mixed: "false" }
// ]
```

### Any Type

```javascript
// Auto-detecting flexible type
const anyCSVT = `name:string,data:any,info:any
"John",42,"text value"
"Jane",true,"[1,2,3]"
"Bob","{""key"":""value""}",123.45`;

const anyResult = csvt.parseCSVTSync(anyCSVT);
console.log(anyResult.data);
// Output: [
//   { name: "John", data: 42, info: "text value" },
//   { name: "Jane", data: true, info: [1,2,3] },
//   { name: "Bob", data: {"key":"value"}, info: 123.45 }
// ]
```

### Escape Sequences

```javascript
// Enable escape sequence processing for string fields
const escapeCSVT = `message:string,path:string
"Line 1\\nLine 2","C:\\\\Users\\\\file.txt"`;

// Default behavior - preserves literal backslashes
const defaultResult = csvt.parseCSVTSync(escapeCSVT, { processEscapes: false });
console.log(defaultResult.data[0].message); // "Line 1\\nLine 2"

// With escape processing - converts sequences to actual characters
const processedResult = csvt.parseCSVTSync(escapeCSVT, { processEscapes: true });
console.log(processedResult.data[0].message); 
// Output: "Line 1
//          Line 2"

// Supported escape sequences: \\n \\t \\r \\" \\\\
```

## Supported Types

### Basic Types
| Type     | Description        | Example                  |
|----------|--------------------|--------------------------|
| `string` | Text values        | `"Hello World"`          |
| `number` | Integer or float   | `42`, `3.14`             |
| `boolean`| Boolean values     | `true`, `false`, `1`, `0`, `yes`, `no` |
| `array`  | JSON arrays        | `["item1", "item2"]`     |
| `json`   | JSON objects       | `{"key": "value"}`       |
| `any`    | Auto-detecting type| Auto-infers best type    |
| `void`   | Null/empty values  | `null`, `""`             |

### Date & Time Types
| Type       | Description      | Example                    |
|------------|------------------|----------------------------|
| `date`     | Date only        | `"2024-01-15"`            |
| `datetime` | Date with time   | `"2024-01-15T10:30:00Z"`  |
| `time`     | Time only        | `"10:30:00"`              |

### Web & Network Types
| Type        | Description     | Example                        |
|-------------|-----------------|--------------------------------|
| `url`       | HTTP/HTTPS URLs | `"https://example.com"`        |
| `email`     | Email addresses | `"user@example.com"`          |
| `ipaddress` | IP addresses    | `"192.168.1.1"`               |

### Visual Types
| Type        | Description      | Example              |
|-------------|------------------|----------------------|
| `hexcolor`  | Hex colors       | `"#FF0000"`         |
| `rgba`      | RGBA colors      | `"rgba(255,0,0,0.5)"`|
| `color`     | Named/hex colors | `"red"`, `"#FF0000"`|

### Identifier Types
| Type         | Description | Example                        |
|--------------|-------------|--------------------------------|
| `uuid`       | UUIDs       | `"550e8400-e29b-41d4-a716-446655440000"` |
| `percentage` | Percentages | `"75%"`                        |

### Advanced Types
| Type    | Description              | Example                          |
|---------|--------------------------|----------------------------------|
| `enum`  | Restricted value set     | `status:enum(pending,approved,rejected)` |
| `union` | Multiple type options    | `value:string\|number\|boolean`   |

### Length-Specified Text
| Type          | Description                    | Example                    |
|---------------|--------------------------------|----------------------------|
| `text`        | Unlimited text length          | `description:text`         |
| `varchar(n)`  | Variable length, max n chars   | `name:varchar(50)`        |
| `char(n)`     | Fixed length, padded to n chars | `code:char(10)`          |

## API Reference

### Parsing Functions

- `parseCSVTSync(content, options)` - Synchronous parsing
- `parseCSVT(content, options)` - Asynchronous parsing (returns Promise)

### File Operations

- `readFileSync(filename, options)` - Synchronous file reading
- `readFile(filename, options)` - Asynchronous file reading
- `writeFileSync(filename, data, columns, options)` - Synchronous file writing
- `writeFile(filename, data, columns, options)` - Asynchronous file writing

### Error Handling

```javascript
try {
  const result = csvt.parseCSVTSync(content, { strict: true });
} catch (error) {
  if (error instanceof csvt.ValidationError) {
    console.log(`Error in column "${error.column}" at line ${error.line}`);
    console.log(`Expected: ${error.expectedType}, Got: ${error.actualValue}`);
  }
}
```

### Options

```javascript
const options = {
  delimiter: ',',        // Field delimiter
  quote: '"',           // Quote character
  escape: '"',          // Escape character
  skipEmptyLines: true, // Skip empty lines
  trim: true,           // Trim whitespace
  strict: false,        // Strict error handling
  processEscapes: false // Process escape sequences in string fields
};
```

#### Escape Sequence Processing

When `processEscapes: true` is enabled, the following escape sequences are processed in string fields:

| Sequence | Result | Description |
|----------|---------|-------------|
| `\\n`    | `\n`    | Newline character |
| `\\t`    | `\t`    | Tab character |
| `\\r`    | `\r`    | Carriage return |
| `\\"`    | `"`     | Quote character |
| `\\\\`   | `\`     | Backslash character |

**Important Notes:**
- Escape processing only applies to `string` type fields
- For `union` types, processing applies only if the final parsed value is a string
- Complex types like `json` and `array` are not affected by escape processing
- Default behavior preserves literal backslashes for compatibility


## License

MIT License © 2025 Abdullah Zughbi
