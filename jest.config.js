module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '.(.css|less|scss)$': 'identity-obj-proxy'
  }
}
