# Changelog

## 1.1.1 - 2025-07-21

### Fixed
- Added missing `.d.ts` type definitions for various CSVT types.
- Fixed TypeScript errors related to "cannot find module" for certain types.

---

## 1.1.0 - 2025-07-21

- Added support for new CSVT types:
  - `any`, `char`, `color`, `date`, `datetime`, `email`, `enum`, `hexcolor`,
    `ipaddress`, `percentage`, `rgba`, `string`, `text`, `time`, `union`, `url`, `uuid`, `varchar`, `void`
- Improved internal type validation
- Prepared for future extensibility


---

## 1.0.0 to 1.0.2 - Initial Release

- Initial version of CSV parser with type-safe schema validation.
