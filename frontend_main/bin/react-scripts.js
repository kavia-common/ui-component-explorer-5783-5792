#!/usr/bin/env node
/**
 * Local proxy to CRA's react-scripts binary to avoid PATH/linking issues in certain CI environments.
 * Falls back to requiring the project-local react-scripts package.
 */
try {
  // Try to resolve react-scripts from local installation
  require(require.resolve('react-scripts/scripts/start', { paths: [process.cwd()] }));
} catch (e) {
  console.error('react-scripts not found. Please run `npm ci` or `npm install` before building/running.');
  process.exit(1);
}
