module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // testMatch: ['<rootDir>/tests/*.test.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    globals: {
        'ts-jest': {
            tsConfig: "tsconfig.json",
            diagnostics: false
        }
    },
    verbose: true,
    testURL: "http://localhost/",
};