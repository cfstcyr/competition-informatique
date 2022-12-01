import { NumberToString } from './question-8';

describe('10. Number to string', () => {
    const tests: [input: number, output: string][] = [
        [73, 'soixante-treize'],
        [-839, 'moins huit cent trente-neuf'],
        [100, 'cent'],
        [200, 'deux cents'],
        [245, 'deux cent quarante-cinq'],
        [1320, 'mille trois cent vingt'],
        [192726, 'cent quatre-vingt-douze mille sept cent vingt-six'],
        [0, 'zéro'],
        [94178, 'quatre-vingt-quatorze mille cent soixante-dix-huit'],
        [2000000, 'deux millions'],
        [300000000, 'trois cents millions'],
        [4000000000, 'quatre milliards'],
        [80, 'quatre-vingts'],
        [400000, 'quatre cent mille'],
        [301, 'trois cent un'],
        [600000000, 'six cents millions'],
        [180, 'cent quatre-vingts'],
        [1000000000, 'un milliard'],
        [1000000001, 'un milliard un'],
        [1, 'un'],
        [666, 'six cent soixante-six'],
        [
            2147483647,
            'deux milliards cent quarante-sept millions quatre cent quatre-vingt-trois mille six cent quarante-sept',
        ],
        [-4325, 'moins quatre mille trois cent vingt-cinq'],
    ];

    for (let i = 0; i < tests.length; ++i) {
        const [input, output] = tests[i];

        it(`Use ${input}`, () => {
            expect(NumberToString(input)).toEqual(output);
        });
    }
});
