import { ShortestPath } from './question-5';

describe('Maze', () => {
    it('should work 1', () => {
        const input = `
            21014334430132233001
            04010000000200003443
            03454221532312001000
            00000000200000004213
            22220300423220200001
            10023212200000232103
            11050000100000300004
            01010000343430432322
            43010000300020000000
            20012432400041232132
        `;
        const output = 79;

        expect(ShortestPath(input)).toEqual(output);
    });

    it('should work 2', () => {
        const input = `
            15555
            10005
            13225
            30005
            34441
        `;
        const output = 21;

        expect(ShortestPath(input)).toEqual(output);
    });

    it('should work 3', () => {
        const input = `
            19999999999
            10000000009
            10111011109
            10101010109
            10101010109
            10101010109
            11101110111
        `;
        const output = 33;

        expect(ShortestPath(input)).toEqual(output);
    });

    it('should work 4', () => {
        const input = `
            24345450000000000000000
            00000040000000000000000
            00000040000000000000000
            00123433555555555553344
            00200000000000000080003
            00300001111111000080004
            00900001000001000070005
            00300001111001000090006
            00200000001001000087777
            00100000001001000000008
            00111111111001111111111
        `;
        const output = 105;

        expect(ShortestPath(input)).toEqual(output);
    });

    it('should work 5', () => {
        const input = `
            132112
            000008
            000119
            000109
            000111
        `;
        const output = 33;

        expect(ShortestPath(input)).toEqual(output);
    });

    it('should work 6', () => {
        const input = `
            132112
            000008
            000559
            000501
            000551
        `;
        const output = 29;

        expect(ShortestPath(input)).toEqual(output);
    });

    it('should work 7', () => {
        const input = `
            1999999
            1000009
            1111109
            0000109
            1111109
            1000009
            1111111
        `;
        const output = 21;

        expect(ShortestPath(input)).toEqual(output);
    });
});
