module.exports = {
  bail: 1,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  testEnvironment: 'node',
  coverageProvider: 'v8',
  testMatch: ['**/*.test.js'],
}
