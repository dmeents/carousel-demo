const baseConfig = require('../../.config/jest.config.base');
const packageName = require('./package.json').name.split('@carousel/').pop();
const webBase = require('../../.config/jest.config.web');

module.exports = { ...baseConfig, ...webBase(packageName) };
