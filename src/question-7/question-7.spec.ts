/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Equals, Triangulation } from './question-7';

describe('Triangulation', () => {
    it('should work 1', () => {
        const circles: [[number, number], number][] = [
            [[1, 1], 1],
            [[0, 1], 1],
            [[-0.5, -0.5], 1],
            [[1, -0.8], 1],
        ];
        const result = Triangulation(circles);

        expect(result).not.toBeNull();
        expect(Equals(result!.x, 0.45)).toBeTruthy();
        expect(Equals(result!.y, 0.08)).toBeTruthy();
        expect(Equals(result!.r, 0.12)).toBeTruthy();
    });

    it('should work 2', () => {
        const circles: [[number, number], number][] = [
            [[1, 1], 1],
            [[0, 1], 1],
            [[-0.5, -0.5], 1],
            [[0.7, -0.7], 1],
        ];
        const result = Triangulation(circles);

        expect(result).not.toBeNull();
        expect(Equals(result!.x, 0.37)).toBeTruthy();
        expect(Equals(result!.y, 0.16)).toBeTruthy();
        expect(Equals(result!.r, 0.14)).toBeTruthy();
    });

    it('should work 3', () => {
        const circles: [[number, number], number][] = [
            [[1, 1], 1],
            [[3, 1], 1.5],
            [[2, 2], 1],
        ];
        const result = Triangulation(circles);

        expect(result).not.toBeNull();
        expect(Equals(result!.x, 1.83)).toBeTruthy();
        expect(Equals(result!.y, 1.36)).toBeTruthy();
        expect(Equals(result!.r, 0.4)).toBeTruthy();
    });

    it('should work 4', () => {
        const circles: [[number, number], number][] = [
            [[0.5, 0.5], 1],
            [[3, 1], 1.5],
            [[2, 2], 1],
        ];
        const result = Triangulation(circles);

        expect(result).not.toBeNull();
        expect(Equals(result!.x, 1.38)).toBeTruthy();
        expect(Equals(result!.y, 0.98)).toBeTruthy();
        expect(Equals(result!.r, 0.3)).toBeTruthy();
    });
});
