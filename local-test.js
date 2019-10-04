/**
 *用于本地写题
 */
function maxInWindows(num, size) {
    // write code here
    let arr = []
    for (var i = 0; i <= num.length - size; i++) {
        let j = i + size
        let temp = num.slice(i, j)
        console.log(temp)
        arr.push(Math.max(...temp))
    }


    return arr
}
console.log(maxInWindows([2, 3, 4, 2, 6, 2, 5, 1], 3));