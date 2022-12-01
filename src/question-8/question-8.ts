type Unite = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const NAMES = ['cent', 'mille', 'million', 'milliard'];

const NUMBERS: { [K in Unite]: string } = {
    0: 'zéro',
    1: 'un',
    2: 'deux',
    3: 'trois',
    4: 'quatre',
    5: 'cinq',
    6: 'six',
    7: 'sept',
    8: 'huit',
    9: 'neuf',
};

const DIZAINES: { [K in number]: string } = {
    10: 'dix',
    20: 'vingt',
    30: 'trente',
    40: 'quarante',
    50: 'cinquante',
    60: 'soixante',
    80: 'quatre-vingt',
};

const SPECIALS: { [K: number]: string } = {
    10: 'dix',
    11: 'onze',
    12: 'douze',
    13: 'treize',
    14: 'quatorze',
    15: 'quinze',
    16: 'seize',
};

const getSpecial = (d: Unite, u: Unite): string => {
    if (d === 7 || d === 9) {
        return `${DIZAINES[(d - 1) * 10]}-${
            getSpecial(1, u) ?? `${DIZAINES[10]}-${NUMBERS[u]}`
        }`;
    } else {
        return SPECIALS[d * 10 + u];
    }
};

export function NumberToString(num: number): string {
    const negative = num < 0;
    num = Math.abs(num);
    const n = Math.ceil(Math.log10(num + 1) / 3);

    console.log(num, n, '=========');

    const parts = [];

    if (num === 0) return NUMBERS[0];

    for (let i = 0; i < n; ++i) {
        const str = String(Math.floor(num / Math.pow(10, i * 3)));
        const triplet = Number(str.substring(str.length - 3));

        const centaine: Unite = Math.floor(triplet / 100) as Unite;
        const dizaine: Unite = Math.floor(
            (triplet - centaine * 100) / 10,
        ) as Unite;
        const unite: Unite = (triplet - centaine * 100 - dizaine * 10) as Unite;

        console.log(triplet, centaine, dizaine, unite);

        let part = '';

        if (centaine > 0) {
            part += `${centaine > 1 ? NUMBERS[centaine] + ' ' : ''}cent${
                centaine > 1 && unite === 0 && dizaine === 0 && i !== 1
                    ? 's'
                    : ''
            }`;
        }

        const s = getSpecial(dizaine, unite);

        if (triplet > 0) {
            if (s) {
                if (dizaine === 8 && unite === 0) {
                    part += ` ${s}s`;
                } else {
                    part += ` ${s}`;
                }
            } else {
                if (dizaine > 0) {
                    part += ` ${DIZAINES[dizaine * 10]}${
                        dizaine === 8 && unite === 0 ? 's' : ''
                    }`;
                }
                if (unite > 0 && (triplet !== 1 || i !== 1)) {
                    part += `${dizaine > 0 ? '-' : ' '}${NUMBERS[unite]}`;
                }
            }
        }

        if (i > 0 && triplet > 0) {
            part += ` ${NAMES[i]}${
                triplet > 1 && NAMES[i] !== 'mille' ? 's' : ''
            }`;
        }

        parts.unshift(part);
    }

    let output = parts.join(' ');

    while (output.includes('  ')) output = output.replace('  ', ' ');

    return (negative ? 'moins ' : '') + output.trim();
}
