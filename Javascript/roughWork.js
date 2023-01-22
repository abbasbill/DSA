//  let arr = [7, 3, 5, 2, -4, 8, 11];
// function twoSum(arr) {
//     //get the first index in the array
//         //check if result exists in created object
//             //loop through the object and return all possible pairs

//     let target = arr[0];
//     let storage = {};
//     let arr2 = [];
//     let result = "";
//     console.log(target);

//     for (let index = 1; index < arr.length; index++) {
//         // let subtract = target - arr[index];
//         console.log(target - arr[index]);
//         if (storage[target - arr[index]] != undefined) {
//             //target - arr[index] = storage[arr[index]];
//             arr2.push([storage[target - arr[index]], arr[index]])
//         } else {
//             storage[arr[index]] = arr[index];
//         }
//         // console.log(subtract);
//     }
//     for (let index = 0; index < arr2.length; index++) {
//         result += `${arr2[index]} `;
        
//     }
//     console.log(storage);
//     console.log(arr2);
//     console.log("the result below");
//     return result;
// }


// twoSum(arr);



// function stringReduction(str) {
//     let abCheck = str.search(/ab/i);
//     let firstString = "";
//     let secondString = "";
//     let thirdString = "";

//     if (abCheck != -1) {
//         firstString = str.replace(/ab/g, "c");
//     }
//     let bcCheck = firstString.search(/bc/i);
//     if (bcCheck != -1) {
//         secondString = firstString.replace(/bc/g, "a");
//     } else {
//         secondString = firstString;
//     }
//     let caCheck = secondString.search(/ca/i);
//     if (caCheck != -1) {
//         thirdString = str.replace(/ca/g, "b");
//     } else {
//         thirdString = secondString;
//     }
//     console.log(thirdString);
//     return thirdString;
// }

// stringReduction("bcab");


// function movingMedian(arr) {
//     let array1 = [];
//     array1.push(1);
//     for (let i = 1; i < arr.length - 1; i++) {
//         let median = (arr[i-1] + arr[i+1]) / arr[i];
//         array1.push(median);
//     }
//     array1.push(1);

//     console.log(array1);
// }

// movingMedian([5,2,4,6])

// if(4.5 > 4) {console.log("see")}


// const isValid = (s) => {
//     const stack = [];
//     const openSet = new Set(['(', '{', '[']);
//     const closeOpenMap = new Map([
//       [')', '('],
//       ['}', '{'],
//       [']', '['],
//     ]);
    
//     for (let i = 0; i < s.length; i += 1) {
//       if (openSet.has(s[i])) {
//         stack.push(s[i]);
//       } else {
//         const pop = stack.pop();
//         if (pop !== closeOpenMap.get(s[i])) {
//           return false;
//         }
//       }
//     }
    
//     return stack.length === 0;
//   };
//     console.log(isValid("{(})"))



// let arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
// function minimumAbsoluteDifference(arr) {  
//     let absoluteValues = []
//     let arrDuplicate = arr.slice()
//     for(let i = 0; i < arr.length; i++){
//         for(let j = arrDuplicate.length-1; j > i; j--){
//             absoluteValues.push(Math.abs(arr[i] - arrDuplicate[j]))   
//         }
        
//     }
//          return Math.min(...absoluteValues)
        
// }
//  console.log(minimumAbsoluteDifference(arr))


`Have the function OffBinary (strArr)
read the array of strings stored in
strarr, which will contain two
elements, the first will be a positive
decimal number and the second element
will be a binary number. Your goal is to
determine how many digits in the binary
number need to be changed to represent
the decimal number correctly (either 0
change to 1 or vice versa), For example:
If strArr is ['56', '011000"] then your
program should return 1 because only 1
digit needs to change in the binary
number (the first zero needs to become
a 1) to correctly represent 56 in binary`

function offBinary(strArr){
  let count = 0
  binaryValue = Number(strArr[0]).toString(2)
  for(let i = 0; i < binaryValue.length; i++){
     if(binaryValue.charAt(i) != strArr[1].charAt(i)){
         count++
       }
  }
  return count
}
console.log(offBinary(['10', '0110']))

  


