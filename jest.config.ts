import type { Config } from 'jest';

const config: Config = {
    roots: ['<rootDir>/src'],
    setupFiles: ['react-app-polyfill/jsdom'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
    resetMocks: true,
};

export default config;
