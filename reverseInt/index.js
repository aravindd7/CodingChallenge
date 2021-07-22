// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversedInt = ''
    n = n.toString();
    for (let i = 0; i < n.length; i++) {
        reversedInt = n[i] + reversedInt
    }
    /* Alternatively using Math.sign(n) will multiple the
    reversed integer by a -1 if the number was negative
    Math.sign() return 0 for positive and -1 for negative 
    numbers */

    // if (reversedInt[reversedInt.length - 1] === '-') {
    //     reversedInt = parseInt(reversedInt) * -1
    // }
    return parseInt(reversedInt) * Math.sign(n);
}

module.exports = reverseInt;
