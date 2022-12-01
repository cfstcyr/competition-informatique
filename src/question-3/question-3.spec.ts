import { LoopDetection } from './question-3';

describe('Loop Detection', () => {
    it('should work 1', () => {
        const input = `
            A B
            A C
            B D
            B E
            C F
            F A
            F G
        `;
        const output = true;

        expect(LoopDetection(input)).toEqual(output);
    });

    it('should work 2', () => {
        const input = `
            A B
            A C
            B D
            B E
            C F
            F G
            F H
        `;
        const output = false;

        expect(LoopDetection(input)).toEqual(output);
    });

    it('should work 3', () => {
        const input = `
            A B
            A C
            B D
            B E
            C F
            F G
            F H
            A E
        `;
        const output = false;

        expect(LoopDetection(input)).toEqual(output);
    });
});
