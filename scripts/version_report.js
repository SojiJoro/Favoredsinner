const packageJson = require('../package.json');

function printSummary() {
  const nodeVersion = process.version;
  const nextVersion = packageJson.dependencies.next || 'N/A';
  const reactVersion = packageJson.dependencies.react || 'N/A';

  console.log('Installation summary:');
  console.log(`Node version: ${nodeVersion}`);
  console.log(`Next.js version: ${nextVersion}`);
  console.log(`React version: ${reactVersion}`);
}

printSummary();
