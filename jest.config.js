module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['html', 'json', 'text-summary', 'lcov'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!<rootDir>/src/App.js',
    '!<rootDir>/src/serviceWorker.js',
    '!<rootDir>/src/server.js',
    '!<rootDir>/src/App.styled.js',
    '!<rootDir>/src/index.js',
    '!<rootDir>/src/reportWebVitals.js',
    '!<rootDir>/src/setupTests.js',
    '!src/pages/**/*.{js,jsx,mjs}',
    '!src/util/**/*.{js,jsx,mjs}',
    '!src/shared/**/*.{js,jsx,mjs}',
    '!src/framework/**/*.{js,jsx,mjs}',
    '!src/reducers/index.{js,jsx,mjs}',
    '!src/store.{js,jsx,mjs}'
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/config//CSSStub.js`
  },
  setupFiles: ['<rootDir>/enzyme.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false
}
