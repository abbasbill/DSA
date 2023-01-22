
//Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternatingValues(n, a, b){
var i = 0
var array = [];

while( i < n ){
if(i % 2 == 0){
array.push(a)
 }else{ 
array.push(b)
 }
 i++
}
return array
}
console.log(alternatingValues(5, true, false))