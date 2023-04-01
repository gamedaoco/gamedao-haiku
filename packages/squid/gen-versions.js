const { exec } = require('child_process');
const { chainRPC, archiveGQL } = require('./src/config.json');

// const cmd = `npx squid-substrate-metadata-explorer --chain ${chainRPC} --archive ${archiveGQL} --out zeroVersions.json`;
const cmd = `npx squid-substrate-metadata-explorer --chain ${chainRPC} --out zeroVersions.json`;
console.log(`> ${cmd}`);
const execCmd = exec(cmd);

execCmd.stdout.pipe(process.stdout);
execCmd.stderr.pipe(process.stderr);
