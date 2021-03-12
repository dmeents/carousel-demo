'use strict';

const baseConfig = require('./.config/jest.config.base');

module.exports = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*/jest.config.js'],
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage/',
};
