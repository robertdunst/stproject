module.exports = {
  // test environment and the extensions
  testEnvironment: 'node',
  setupFilesAfterEnv: ["jest-extended", "jest-chain"],

  // we want coverage
  collectCoverage: true,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text", "text-summary"],

  // directory for our tests
  roots: ["<rootDir>/tests"], 

  // ignore the .internal files regarding test coverage reports
  testPathIgnorePatterns: ["/node_modules/", "/.internal/"],
  coveragePathIgnorePatterns: ["/node_modules/", "/.internal/"]
};