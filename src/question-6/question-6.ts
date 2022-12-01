/* eslint-disable no-useless-escape */

interface Monome {
    symbol: 1 | -1;
    multiplicator: number;
    variable: 'x' | undefined;
    power: number;
}

function parsePolynome(expression: string): string[] {
    const splitPolynome = /((^|\+|-)[0-9x^\.]{1,})/gm;
    return expression.match(splitPolynome) ?? [];
}

function parseMonome(monome: string): Monome {
    const splitMonome =
        /^(?<symbol>[\+\-]?)(?<multiplicator>[0-9]{0,}\.?[0-9]{0,})(?<variable>x?)($|\^(?<power>[0-9]{1,}))$/gm;

    const match = splitMonome.exec(monome);

    const symbol = match?.groups?.symbol === '-' ? -1 : 1;
    const multiplicator =
        match?.groups?.multiplicator && match?.groups?.multiplicator.length
            ? Number(match?.groups?.multiplicator)
            : 1;
    const variable = match?.groups?.variable as 'x' | undefined;
    const power = Number(match?.groups?.power ?? '1');

    return { symbol, multiplicator, variable, power };
}

function area(monome: Monome, x: number, dx: number): number {
    let v = monome.multiplicator;

    if (monome.variable) {
        v *= Math.pow(x, monome.power);
    }

    return monome.symbol * v * dx;
}

function integrateMonome(
    str: string,
    dx: number,
    start: number,
    end: number,
): number {
    const monome = parseMonome(str);
    let integral = 0;

    for (let x = start; x <= end - dx; x += dx) {
        integral += area(monome, x, dx);
    }

    return integral;
}

function formatNumber(n: number, precision = 2) {
    const m = Math.pow(10, precision);
    return (Math.round(n * m) / m).toFixed(precision);
}

export function Integral(
    expression: string,
    start: number,
    end: number,
): string {
    const polynome = parsePolynome(expression);
    let integral = 0;

    for (const monome of polynome) {
        integral += integrateMonome(monome, 0.00001, start, end);
    }

    return formatNumber(integral);
}
