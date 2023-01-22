//  Calculate and return the sum of the numbers in the given array. 
 const arrayOfNumbers = [2,3,7,9,11,8,60]
// function sumOfNumbers(arrayOfNumbers){
//     let sum = 0
//     for(let i = 0; i < arrayOfNumbers.length; i++){
//         sum  += arrayOfNumbers[i]
//     }
//     return sum
// }
// console.log(sumOfNumbers(arrayOfNumbers))

// =========================================================================================

function sumOfNumbers(arrayOfNumbers){
    return arrayOfNumbers.reduce((i, j) => i + j, 0)
}
console.log(sumOfNumbers(arrayOfNumbers))