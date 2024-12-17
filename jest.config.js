const nextJest = require('next/jest')
 
const createJestConfig = nextJest({
  dir: './',
})
/** @type {import('jest').Config} */
const config = {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
module.exports = createJestConfig(config)