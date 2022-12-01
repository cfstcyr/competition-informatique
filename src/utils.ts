// eslint-disable-next-line @typescript-eslint/no-unused-vars
function printMatrix<T>(matrix: T[][], separator = ' ') {
    for (const row of matrix) {
        let line = '';
        for (const e of row) {
            line += e + separator;
        }
        console.log(line);
    }
}

export function printGraph<
    V,
    T extends {
        children: T[];
        depth: number;
        value: V;
        parent: T | undefined;
    },
>(node: T) {
    let stack = [node];
    const lines: string[] = [];

    let current: T | undefined;
    while ((current = stack.shift())) {
        lines[current.depth] =
            (lines[current.depth] ?? '') +
            (current.parent ? current.parent.value + ':' : '') +
            current.value +
            '  ';
        stack = stack.concat(current.children);
    }
}

export function permutations<T>(list: T[]): T[][] {
    const result: T[][] = [];

    const permute = (l: T[], m: T[] = []) => {
        if (l.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < l.length; i++) {
                const curr = l.slice();
                const next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    };

    permute(list);

    return result;
}

export const POLYGON = {
    rectangle: (w: number, h: number, x = 0, y = 0): [number, number][] => [
        [x - w / 2, y - h / 2],
        [x + w / 2, y - h / 2],
        [x + w / 2, y + h / 2],
        [x - w / 2, y + h / 2],
        [x - w / 2, y - h / 2],
    ],
    square: (s: number, x = 0, y = 0): [number, number][] =>
        POLYGON.rectangle(s, s, x, y),
};
