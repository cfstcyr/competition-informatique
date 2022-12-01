/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { printGraph } from '../utils';

class Node {
    children: Node[];

    constructor(
        public value: string,
        public parent: Node | undefined,
        public depth: number,
    ) {
        this.children = [];
    }
}

function buildMap(lines: string[]) {
    const map = new Map<string, Node>();

    for (const line of lines) {
        const lineValues = line.split(' ');
        const p = lineValues[0];
        const c = lineValues[1];

        const parent = map.get(p) ?? new Node(p, undefined, 0);
        map.set(p, parent);

        if (c) {
            const child = new Node(c, parent, parent.depth + 1);
            parent.children.push(child);
            map.set(c, child);
        }
    }

    return map;
}

export function ComplaintToBoss(input: string) {
    const lines = input
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0);
    const [a, b] = lines.shift()!.split(' ') as [string, string];

    const map = buildMap(lines);

    printGraph(map.get('A')!);

    let nodeA = map.get(a)!;
    let nodeB = map.get(b)!;

    while (nodeA.depth > nodeB.depth) nodeA = nodeA.parent!;
    while (nodeB.depth > nodeA.depth) nodeB = nodeB.parent!;

    while (nodeA != nodeB) {
        nodeA = nodeA.parent!;
        nodeB = nodeB.parent!;
    }

    return nodeA.value;
}
