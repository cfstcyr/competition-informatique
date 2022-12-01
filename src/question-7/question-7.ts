/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { makeCircle } from './smallest-circle';

export const DELTA = 0.01;

class Point {
    constructor(public x: number, public y: number) {}

    equals(p: Point) {
        return Equals(this.x, p.x) && Equals(this.y, p.y);
    }

    toEquation() {
        return `(${this.x}, ${this.y})`;
    }

    add(p: Point) {
        return new Point(this.x + p.x, this.y + p.y);
    }

    sub(p: Point) {
        return new Point(this.x - p.x, this.y - p.y);
    }

    divide(s: number) {
        return new Point(this.x / s, this.y / s);
    }

    multiply(s: number) {
        return new Point(this.x * s, this.y * s);
    }

    length() {
        return Math.hypot(this.x, this.y);
    }
}

class Circle {
    constructor(public x: number, public y: number, public r: number) {}

    isWithin(p: Point) {
        const d = Distance2Points(p, this.point);
        return LowerThan(d, this.r);
    }

    get point() {
        return new Point(this.x, this.y);
    }

    toEquation() {
        return `(x - ${this.x})^2 + (y - ${this.y})^2 = ${this.r}^2`;
    }
}

export function Equals(v1: number, v2: number, delta: number = DELTA) {
    return Math.abs(v1 - v2) <= delta;
}

export function GreaterThan(v1: number, v2: number, delta: number = DELTA) {
    return Equals(v1, v2, delta) || v1 > v2;
}

export function LowerThan(v1: number, v2: number, delta: number = DELTA) {
    return Equals(v1, v2, delta) || v1 < v2;
}

export function Triangulation(
    satellites: [position: [x: number, y: number], d: number][],
): Circle | null {
    satellites.push(satellites[0]);
    const circles = satellites.map(([[x, y], d]) => new Circle(x, y, d));
    const estimation: Point = InterpolateCircles(circles);

    const triangulatedPoints: Point[] = [];

    for (let i = 1; i < satellites.length; ++i) {
        const c1 = circles[i - 1];
        const c2 = circles[i];

        const intersections = CircleIntersection(c1, c2);
        const closest = findClosestPoint(estimation, intersections);

        triangulatedPoints.push(closest);
    }

    const circle = makeCircle(triangulatedPoints);
    return circle ? new Circle(circle.x, circle.y, circle.r) : null;
}

export function InterpolatePoints(points: Point[]): Point {
    return new Point(
        points.reduce((l, { x }) => (l += x), 0) / points.length,
        points.reduce((l, { y }) => (l += y), 0) / points.length,
    );
}

export function InterpolateCircles(circles: Circle[]): Point {
    const total = circles.reduce((l, { r }) => (l += r), 0);
    return new Point(
        circles.reduce((l, { x, r }) => (l += x * r), 0) / total,
        circles.reduce((l, { y, r }) => (l += y * r), 0) / total,
    );
}

export function InterpolateClosestPointsOnCircles(
    c1: Circle,
    c2: Circle,
): Point {
    const p1 = ClosestPointOnCircle(c1, c2.point);
    const p2 = ClosestPointOnCircle(c2, c1.point);

    return InterpolatePoints([p1, p2]);
}

export function ClosestPointOnCircle(circle: Circle, point: Point): Point {
    const BMinusA = point.sub(circle.point);
    const BMinusAL = BMinusA.length();

    return circle.point.add(BMinusA.multiply(circle.r / BMinusAL));
}

export function findClosestPoint(root: Point, points: Point[]): Point {
    if (points.length == 0) throw new Error('Must have points');
    if (points.length == 1) return points[0];

    return points
        .map<[Point, number]>((point) => [point, Distance2Points(root, point)])
        .sort(([, d1], [, d2]) => (d1 > d2 ? 1 : -1))
        .shift()![0];
}

export function Distance2Points(
    { x: x1, y: y1 }: Point,
    { x: x2, y: y2 }: Point,
): number {
    return Math.hypot(x2 - x1, y2 - y1);
}

export function CircleIntersection(c1: Circle, c2: Circle): Point[] {
    const dx = c2.x - c1.x;
    const dy = c2.y - c1.y;

    // distance between circles center
    const d = Math.sqrt(dy * dy + dx * dx);

    if (!LowerThan(d, c1.r + c2.r)) {
        // no solution, do not intersect
        return [InterpolateClosestPointsOnCircles(c1, c2)];
    }

    if (!GreaterThan(d, Math.abs(c2.r - c1.r))) {
        throw new Error('Circle is within another');
    }

    // distance between point 2 and circle 1
    const a = (c1.r * c1.r - c2.r * c2.r + d * d) / (2 * d);

    // Coordinates of point 2
    const x2 = c1.x + (dx * a) / d;
    const y2 = c1.y + (dy * a) / d;

    // Distance between point 2 to either of intersect point
    const h = Math.sqrt(c1.r * c1.r - a * a);

    // Offset intersection points from point 2
    const rx = -dy * (h / d);
    const ry = dx * (h / d);

    // Intersection points
    const p1 = new Point(x2 + rx, y2 + ry);
    const p2 = new Point(x2 - rx, y2 - ry);

    if (p1.equals(p2)) return [p1];
    else return [p1, p2];
}
