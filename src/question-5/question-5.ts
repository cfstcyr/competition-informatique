/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const MAX_DEPTH = 1000;

class Node {
    value: number;
    visited: boolean;
    x: number;
    y: number;
    distance = Number.POSITIVE_INFINITY;
    parent: Node | undefined;
    depth = 0;

    constructor(value: number, x: number, y: number) {
        this.value = value;
        this.visited = false;
        this.x = x;
        this.y = y;
    }
}

export function ShortestPath(input: string) {
    const maze = input
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l && l.length > 0)
        .map((l, y) =>
            l.split('').map((t, x) => {
                const n = Number(t);

                return n > 0 ? new Node(n, x, y) : undefined;
            }),
        );

    const start = maze[0][0]!;
    const end = maze[maze.length - 1][maze[0].length - 1]!;

    const getTile = (x: number, y: number) => {
        if (x < 0 || y < 0 || y > maze.length - 1 || x > maze[0].length - 1)
            return;
        return maze[y][x];
    };
    const getAdjacent = ({ x, y }: Node): Node[] => {
        return [
            getTile(x - 1, y),
            getTile(x, y - 1),
            getTile(x + 1, y),
            getTile(x, y + 1),
        ].filter<Node>((t): t is Node => t instanceof Node && !t.visited);
    };

    start.distance = 0;

    let stack = [start];
    let current: Node | undefined;
    while ((current = stack.shift())) {
        if (current !== end && current.depth < MAX_DEPTH) {
            current.visited = true;
            const distance = current.distance + current.value;
            const next = getAdjacent(current);
            next.forEach((n) => {
                if (distance < n.distance) {
                    n.parent = current;
                    n.distance = distance;
                    n.depth = current!.depth + 1;
                }
            });
            stack = [...stack, ...next];
        }
    }

    return end.distance + end.value;
}
