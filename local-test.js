/**
 *用于本地写题
 */
function FindNumbersWithSum(arr, sum) {
    // write code here
    let left = 0,
        right = arr.length - 1
    while (left < right) {
        if (arr[left] + arr[right] > sum) {
            right--
        } else if (arr[left] + arr[right] < sum) {
            left++
        } else {
            return [arr[left], arr[right]]
        }
    }
    return []
}
console.log(FindNumbersWithSum([1, 2, 9, 11], 12));