#!/usr/bin/env node
/**
 * CI-safe build runner: tries to execute CRA build even if npm bin links are unavailable.
 */
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');

function tryExec(cmd, args) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', shell: false });
  return res.status === 0;
}

function main() {
  // 1) Try standard CRA build
  if (tryExec('react-scripts', ['build'])) return;

  // 2) Try local node_modules bin path
  const localBin = path.join(process.cwd(), 'node_modules', '.bin', 'react-scripts');
  if (fs.existsSync(localBin) && tryExec(localBin, ['build'])) return;

  // 3) Fallback to requiring the build script directly
  try {
    require(require.resolve('react-scripts/scripts/build', { paths: [process.cwd()] }));
    return;
  } catch (e) {
    console.error('Failed to locate react-scripts. Ensure dependencies are installed.');
    process.exit(1);
  }
}
main();
