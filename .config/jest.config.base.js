module.exports = {
  coveragePathIgnorePatterns: [
    '.d.ts',
    '.dao.ts',
    '.dist/',
    '.dto.ts',
    '.interface.ts',
    '.lib/',
    '.schema.ts',
  ],
  preset: 'ts-jest',
  transform: { '.(ts|tsx)': 'ts-jest' },
  reporters: ['default', 'jest-junit'],
  moduleNameMapper: { '^@allido/(.*)$': '<rootDir>/packages/$1' },
  transformIgnorePatterns: ['<rootDir>/node_modules/', 'dist', 'setupTests.js'],
};
