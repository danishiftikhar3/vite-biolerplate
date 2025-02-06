export default {
    testEnvironment: 'jsdom',
    transform: {
        // Corrected the regex to properly handle file extensions
        '^.+\\.(t|j)sx?$': 'babel-jest',
    },

    moduleNameMapper: {
        // Path aliases
        '^@/(.*)$': '<rootDir>/src/$1',
        // Style files
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        // SVG files
        '^.+\\.svg$': 'jest-transformer-svg',
        // Additional handling for other image formats
        '\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/__mocks__/fileMock.js',
    },

    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    // Include JSON files if needed (optional)
    transformIgnorePatterns: ['node_modules/(?!(my-module|another-module)/)'],
}
