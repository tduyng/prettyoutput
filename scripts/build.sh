#!/bin/bash

set -e # Exit immediately if a command exits with a non-zero status.
rm -rf lib

npx tsc -p tsconfig.lib.json --module NodeNext --outDir lib/esm
echo '{"type": "module"}' > lib/esm/package.json

npx tsc -p tsconfig.lib.json --module CommonJS --moduleResolution Node --outDir lib/cjs
echo '{"type": "commonjs"}' > lib/cjs/package.json

echo 'Compilation successful'