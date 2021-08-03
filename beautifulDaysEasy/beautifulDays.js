function beautifulDays(i, j, k) {
    // Write your code here
    let blength = (j - i) + 1
    let count = 0
    for (let num = 0; num < blength; num++){
        let reverseI = Array.from(i.toString()).map(Number).reverse('').join('');
        let formula = i - parseInt(reverseI)
        if (formula % k === 0 ) {
            count++
        }
        i++
    }
    return count
}