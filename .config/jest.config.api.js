module.exports = function apiBase(packageName) {
  return {
    testEnvironment: 'node',
    name: packageName,
    displayName: packageName,
    globals: {
      'ts-jest': {
        tsconfig: `<rootDir>/packages/${packageName}/tsconfig.json`,
      },
    },
    rootDir: '../../',
    roots: [`<rootDir>/packages/${packageName}`],
    testRegex: `(<rootDir>packages/${packageName}/.*/__tests__/.*|\\.(test|spec))\\.tsx?$`,
  };
};
