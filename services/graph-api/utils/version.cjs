const PACKAGE_VERSION = require("../package.json").version.replace('"','');
process.stdout.write(PACKAGE_VERSION);
