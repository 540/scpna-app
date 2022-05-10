'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
var config = require('./jest.config.js')

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '\\.spec\\.(ts|js)$',
  setupFilesAfterEnv: ['./setupJestUnit.ts'],
  moduleNameMapper: {
    '^@(.*)/(.*)$': '<rootDir>/node_modules/@$1/$2',
    '^__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
    '^core/(.*)$': '<rootDir>/src/core/$1',
    '^ui/(.*)$': '<rootDir>/src/ui/$1'
  },
  resetMocks: true
}

// eslint-disable-next-line no-console
console.log('RUNNING UNIT TESTS')

module.exports = config(customJestConfig)
