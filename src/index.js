const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const MAPPING = {
    '10': '.',
    '11': '-'
};

const SPACE = '**********';

function decode(expr) {
    let res = '';
    for (let i = 0; i < expr.length; i += 10) {
        const letter = expr.substring(i, i + 10);
        if (letter === SPACE) {
            res += ' ';
            continue;
        }
        let code = '';
        for (let j = letter.indexOf('1'); j < letter.length; j += 2) {
            code += MAPPING[letter.substring(j, j + 2)] || '';
        }
        res += MORSE_TABLE[code];
    }
    return res;
}

module.exports = {
    decode
};
