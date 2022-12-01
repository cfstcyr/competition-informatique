import { ComplaintToBoss } from './question-2';

const graph =
    'A\nA B\nA C\nA D\nB E\nB F\nC G\nC H\nD I\nD J\nD K\nE L\nF M\nF N\nG O\nG P\nI Q\nJ R\nJ S\nK T\nK U\nL V\nM W\nW X\nX Y\nY Z';

const tests: [`${string} ${string}`, string][] = [
    ['F X', 'F'],
    ['J H', 'A'],
    ['Y O', 'A'],
    ['Z N', 'F'],
    ['Q K', 'D'],
    ['V X', 'B'],
    ['P H', 'C'],
];

describe('Complain to boss', () => {
    let index = 1;
    for (const [input, expected] of tests) {
        it(`should pass test ${index}`, () => {
            const inputGraph = input + '\n' + graph;

            expect(ComplaintToBoss(inputGraph)).toEqual(expected);
        });

        index++;
    }
});
