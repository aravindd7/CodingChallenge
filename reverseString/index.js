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
