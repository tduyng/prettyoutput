# BREAKING CHANGES

## Version 2.0

### 1. TypeScript conversion
- **Codebase fully migrated to TypeScript** for improved type safety and development experience.
- **Type definitions** are now directly included with the package, so no additional typings are needed.

### 2. ESM and dual module support
- **ESM conversion**: The library has been restructured to support ESM natively.
- **Dual build**: Both ESM and CommonJS modules are included, allowing backward compatibility.
  - **New import syntax**: 
    - ESM: 
        - `import { prettyOutput } from 'pretty-output';`
        - `import prettyOutput from 'pretty-output';`
    - CommonJS: 
        - `const { prettyOutput } = require('pretty-output');`
        - `const prettyOutput = require('pretty-output').default;`
- **Dual bin support**: 
    - The CLI tool has been overhauled with dual binaries for **ESM and CJS** environments.
    - **Aliases**: The binary supports multiple aliases: `pretty`, `prettyoutput`, `prettyOutput`, etc., with suffixes for ESM (`-esm`) and CJS (`-cjs`).

### 3. Pure functional programming refactor
- The core code has been refactored to a **pure functional programming** style.
- **Performance improvements**:
  - **Caching for indentation**: Speeds up repetitive operations.
  - **Optimized loops**: Reduced cost of variable declarations and simplified methods.
  - **Benchmarking**: Now leverages async loading and caching for faster and more accurate benchmarks.
  - New tools like `@poppinss/dumper` and `prettyoutput 1.x` are integrated for comprehensive testing.

### 4. Updated dependencies
- **Removed dependencies**: Deprecated or redundant packages like `lodash`, `colors`, `should`, and `istanbul` have been removed.
- **Updated dependencies**: Latest versions of core dependencies for better compatibility and security.
- **Remove colors library**: write directly a custom color more control and lighter dependencies.  But, it retains the same syntax, so it should not cause any issues in your code.