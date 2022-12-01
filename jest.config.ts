import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    }
};

export default config;