//Minimum Absolute Difference in an Array
`
Given an array of integers, find the minimum absolute difference between any two elements in the array.

`


let arr = [0,9,0];
function minimumAbsoluteDifference(arr) {  
    let absoluteValues = []
    let arrDuplicate = arr.slice()
    for(let i = 0; i < arr.length; i++){
        for(let j = arrDuplicate.length-1; j > i; j--){
            absoluteValues.push(Math.abs(arr[i] - arrDuplicate[j]))  
            // console.log([i,j]) 
        }
       
    }
        
       
        return Math.min(...absoluteValues)
}
 console.log(minimumAbsoluteDifference(arr))