// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let arr = str.split('')
    arr = arr.reverse()
    return arr.join('')
}

function reverse2(str) {
    let reversed = ''
    
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed
}

module.exports = reverse, reverse2;
