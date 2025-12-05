#!/usr/bin/env node
/**
 * Minimal CRA build shim to avoid PATH issues in CI systems.
 * This directly requires the local react-scripts build script.
 */
try {
  require(require.resolve('react-scripts/scripts/build', { paths: [process.cwd()] }));
} catch (e) {
  console.error('react-scripts not found. Please run `npm ci` or `npm install` before building.');
  process.exit(1);
}
