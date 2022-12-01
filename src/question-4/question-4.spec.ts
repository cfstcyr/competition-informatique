import { CountItemWithin } from './question-4';

describe('Is within', () => {
    it('should work 1', () => {
        const points: [number, number][] = [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1],
        ];
        const items: [number, number][] = [
            [0, 0],
            [0.5, 0.5],
            [-2, 0],
            [1, 1],
        ];

        expect(CountItemWithin(items, points)).toEqual(3);
    });

    it('should work 2', () => {
        const points: [number, number][] = [
            [-0.49, 5.29],
            [4.54, 5.97],
            [4.42, 2.02],
            [7.34, 4.88],
            [6.94, 0.44],
            [3.05, 1.37],
            [4.32, -0.17],
            [6.05, 2.3],
            [1.27, -0.44],
            [2.61, 2.71],
            [-1.6, 1.65],
            [-0.33, 3.17],
            [-0.49, 5.29],
        ];
        const items: [number, number][] = [
            [1, 4],
            [1, 1],
            [-5, 4],
            [5, 3],
            [3, 0.2],
            [6, 1],
            [4.2, 0.5],
            [5, 1.1],
        ];

        expect(CountItemWithin(items, points)).toEqual(3);
    });

    it('should work 3', () => {
        const points: [number, number][] = [
            [1.22, -7.3],
            [2.46, -0.04],
            [-5.19, 3.84],
            [-2.54, -4.83],
            [1.22, -7.3],
        ];
        const items: [number, number][] = [
            [4.95, -0.71],
            [1.81, 4.86],
            [1.78, 4.77],
            [3.63, -1.12],
            [-1.88, 2.78],
            [-3.89, -2.19],
            [-0.09, -4.57],
            [-0.37, -3.8],
        ];

        expect(CountItemWithin(items, points)).toEqual(2);
    });

    it('should work 4', () => {
        const points: [number, number][] = [
            [5.62, -1.58],
            [4.73, 3.26],
            [0.84, 0.97],
            [-0.59, 1.47],
            [-1.4, -2.78],
            [5.62, -1.58],
        ];
        const items: [number, number][] = [
            [-1.21, 4.86],
            [-1.87, 0.8],
            [-0.82, -1.95],
            [-4.76, 3.74],
            [0.52, 0.6],
            [0.81, 1.52],
            [-3.67, -2.84],
            [-3.43, 0.53],
            [0.34, 2.5],
            [1.93, 4.56],
            [-2.86, 2.9],
        ];

        expect(CountItemWithin(items, points)).toEqual(2);
    });

    it('should work 5', () => {
        const points: [number, number][] = [
            [-6.02, 1.03],
            [5.18, -6.22],
            [4.99, 4.04],
            [2.66, 3.45],
            [-0.55, 4.79],
            [-6.02, 1.03],
        ];
        const items: [number, number][] = [
            [0.61, 4.27],
            [1.24, -0.55],
            [0.68, -3.31],
            [-2.2, -3.8],
            [-1.85, 2.84],
        ];

        expect(CountItemWithin(items, points)).toEqual(3);
    });

    it('should work 6', () => {
        const points: [number, number][] = [
            [7, -1.8],
            [7, -3.42],
            [-3.77, -2.46],
            [5.37, -1.08],
            [3.18, 6.88],
            [7, -1.8],
        ];
        const items: [number, number][] = [
            [0.11, -4.45],
            [-1.36, -2.91],
            [3.25, 1.33],
            [1.05, 4.37],
            [0.42, -4.68],
            [-4.56, -3.15],
            [-1.65, -0.45],
            [3.81, -3.37],
            [1.41, 4.05],
            [3.57, 2.63],
        ];

        expect(CountItemWithin(items, points)).toEqual(0);
    });
});
