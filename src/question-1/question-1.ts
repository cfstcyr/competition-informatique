export type Tile = 0 | 1;
export type Matrix = Tile[][];

function islandExplorer(row: number, col: number, matrix: Matrix) {
    if (
        row < 0 ||
        col < 0 ||
        row > matrix.length - 1 ||
        col > matrix[0].length - 1
    )
        return;
    if (matrix[row][col] === 0) return;

    matrix[row][col] = 0;

    for (let r = row - 1; r <= row + 1; ++r) {
        for (let c = col - 1; c <= col + 1; ++c) {
            islandExplorer(r, c, matrix);
        }
    }
}

export function NumberOfIsland(matrix: Matrix) {
    let counter = 0;

    for (let r = 0; r < matrix.length; ++r) {
        for (let c = 0; c < matrix[r].length; ++c) {
            if (matrix[r][c] === 1) {
                counter++;
                islandExplorer(r, c, matrix);
            }
        }
    }

    return counter;
}
