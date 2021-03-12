module.exports = function webBase(packageName) {
  return {
    name: packageName,
    displayName: packageName,
    testEnvironment: 'node',
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'babel-jest',
      '^.+\\.md?$': 'markdown-loader-jest',
    },
    globals: {
      'ts-jest': {
        tsconfig: `<rootDir>/packages/${packageName}/tsconfig.json`,
        babelConfig: `<rootDir>/babel.config.js`,
      },
    },
    rootDir: '../../',
    setupFiles: [`<rootDir>/.config/setupTests.js`],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    roots: [`<rootDir>/packages/${packageName}`],
    testRegex: `(<rootDir>packages/${packageName}/.*/__tests__/.*|\\.(test|spec))\\.tsx?$`,
  };
};
