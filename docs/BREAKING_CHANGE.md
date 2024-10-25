# BREAKING CHANGES

## From v1.x to v2.x

This document outlines the significant changes and breaking changes introduced in **v2.x**. These updates include the transition to TypeScript, ESM and dual module support, performance optimizations, and restructured import/export patterns. Please review these carefully to update your projects and avoid compatibility issues.

---

### 1. TypeScript Conversion
- **Codebase fully migrated to TypeScript** for improved type safety and development experience.
- **Type Definitions** are now directly included with the package, so no additional typings are needed.

### 2. ESM and Dual Module Support
- **ESM Conversion**: The library has been restructured to support ESM natively.
- **Dual Build**: Both ESM and CommonJS modules are included, allowing backward compatibility.
  - **New Import Syntax**: 
    - ESM: `import { prettyOutput } from 'pretty-output';`
    - CommonJS: `const { prettyOutput } = require('pretty-output');`

### 3. New CLI Tool with Dual BIN Support
- The CLI tool has been overhauled with dual binaries for **ESM and CJS** environments.
- **Aliases**: The binary supports multiple aliases:
  - `pretty`, `prettyoutput`, `prettyOutput`, etc., with suffixes for ESM (`-esm`) and CJS (`-cjs`).

### 4. Custom Color Handling
- The `colors` package has been removed in favor of a **custom color formatter** for more control and lighter dependencies. However, it retains the same syntax, so it should not cause any issues in your code.

### 5. Pure Functional Programming Refactor
- The core code has been refactored to a **pure functional programming** style.
- **Performance Improvements**:
  - **Caching for Indentation**: Speeds up repetitive operations.
  - **Optimized Loops**: Reduced cost of variable declarations and simplified methods.
  - **Benchmarking**: Now leverages async loading and caching for faster and more accurate benchmarks.
  - New tools like `@poppinss/dumper` and `prettyoutput 1.x` are integrated for comprehensive testing.

### 7. Updated Dependency Management
- **Removed Dependencies**: Deprecated or redundant packages like `lodash`, `colors`, `should`, and `istanbul` have been removed.
- **Updated Dependencies**: Latest versions of core dependencies for better compatibility and security.
- **Biome** replaces `eslint` and `prettier` for consistent code styling and linting across the codebase.

### 9. GitHub Actions for CI/CD
- **Continuous Integration**: GitHub Actions now handle tests, linting, and code coverage.
- **Automated NPM Releases**: Publishing workflows for alpha and stable releases directly to NPM.

### Migration Tips
- **Update Imports**: Ensure all imports match the new ESM or CommonJS syntax.
- **Update CLI Usage**: Use the appropriate alias for your environment (`pretty-esm`, `pretty-cjs`, etc.).
- **Dependencies**: Remove deprecated packages from your project to prevent conflicts.
- **ESM Support**: For projects still using CommonJS, ensure the use of the appropriate module when bundling or running scripts.