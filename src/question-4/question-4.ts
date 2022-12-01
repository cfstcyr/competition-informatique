type Point = [number, number];

/**
 * intersects
 * from: https://stackoverflow.com/a/24392281
 */
function intersects(
    a: number,
    b: number,
    c: number,
    d: number,
    p: number,
    q: number,
    r: number,
    s: number,
) {
    const det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
        return false;
    } else {
        const lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
        const gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
        return 0 <= lambda && lambda <= 1 && 0 <= gamma && gamma <= 1;
    }
}

function IsWithin(item: Point, points: Point[]) {
    let count = 0;
    const [x, y] = item;

    for (let i = 1; i < points.length; ++i) {
        const [x1, y1] = points[i - 1];
        const [x2, y2] = points[i];

        if (intersects(x, y, Number.MAX_SAFE_INTEGER, y, x1, y1, x2, y2)) {
            if (y >= y1 && y <= y2) count++;
            if (y <= y1 && y >= y2) count--;
        }
    }

    return count !== 0;
}

export function CountItemWithin(items: Point[], points: Point[]) {
    points = [...points, points[0]];
    return items.reduce((total, item) => {
        if (IsWithin(item, points)) return total + 1;
        else return total;
    }, 0);
}
