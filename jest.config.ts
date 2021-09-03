export default {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules', './'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
