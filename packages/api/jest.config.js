const baseConfig = require('../../.config/jest.config.base');
const apiBase = require('../../.config/jest.config.api');
const packageName = require('./package.json').name.split('@carousel/').pop();

module.exports = { ...baseConfig, ...apiBase(packageName) };
