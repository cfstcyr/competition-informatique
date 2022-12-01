class Node {
    value: string;
    children: Node[];
    visited: boolean;

    constructor(value: string) {
        this.value = value;
        this.children = [];
        this.visited = false;
    }
}

export function LoopDetection(input: string) {
    const lines = input
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l && l.length > 0);

    const map = new Map<string, Node>();

    for (const line of lines) {
        const [a, b] = line.split(' ');

        if (a == b) return true;

        const nodeA = map.get(a) ?? new Node(a);
        map.set(a, nodeA);
        const nodeB = map.get(b) ?? new Node(b);
        map.set(b, nodeB);

        nodeA.children.push(nodeB);
    }

    for (const node of map.values()) {
        for (const node of map.values()) {
            node.visited = false;
        }

        let stack = [...node.children.filter((c) => !c.visited)];
        let current: Node | undefined;
        while ((current = stack.shift())) {
            if (current === node) return true;
            current.visited = true;
            stack = [...stack, ...current.children.filter((c) => !c.visited)];
        }
    }

    return false;
}
