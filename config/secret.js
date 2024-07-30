const { existsSync } = require('fs');
const { homedir } = require('os');
const { join } = require('path');

const secretConfigPath = join(homedir(), 'app-config/duuk.json');

const config = existsSync(secretConfigPath) ? require(secretConfigPath) : {};

module.exports.secret = {
  ...config,
};
