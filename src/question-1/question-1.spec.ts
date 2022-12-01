import { Matrix, NumberOfIsland } from './question-1';

describe('Number of Island', () => {
    it('should pass test 1', () => {
        const matrix: Matrix = [
            [0, 0, 1, 0],
            [1, 0, 1, 1],
            [0, 0, 1, 0],
            [1, 0, 0, 1],
        ];
        const expected = 3;

        expect(NumberOfIsland(matrix)).toEqual(expected);
    });

    it('should pass test 2', () => {
        const matrix: Matrix = [
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
        ];
        const expected = 2;

        expect(NumberOfIsland(matrix)).toEqual(expected);
    });

    it('should pass test 3', () => {
        const matrix: Matrix = [
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
        ];
        const expected = 1;

        expect(NumberOfIsland(matrix)).toEqual(expected);
    });

    it('should pass test 4', () => {
        const matrix: Matrix = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        const expected = 0;

        expect(NumberOfIsland(matrix)).toEqual(expected);
    });

    it('should pass test 5', () => {
        const matrix: Matrix = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
        const expected = 0;

        expect(NumberOfIsland(matrix)).toEqual(expected);
    });

    it('should pass test 6', () => {
        const matrix: Matrix = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
        ];
        const expected = 1;

        expect(NumberOfIsland(matrix)).toEqual(expected);
    });

    it('should pass test 7', () => {
        const matrix: Matrix = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
        ];
        const expected = 2;

        expect(NumberOfIsland(matrix)).toEqual(expected);
    });

    it('should pass test 8', () => {
        const matrix: Matrix = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 1],
        ];
        const expected = 6;

        expect(NumberOfIsland(matrix)).toEqual(expected);
    });
});
