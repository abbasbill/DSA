`Staircase detail

This is a staircase of size n = 4 :

   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. 
The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.`

function staircase(n) {
    // Write your code here
   let  stair = ""
   let row = "#".repeat(n)
   let rowArr = []
   for(let i of row){
    rowArr.push(i)
   }
 
    for(let i = n; i > 0; i--){
        let  rowArr2 = rowArr.slice()
     rowArr2.splice(0, i-1, " ".repeat(i-1))
    
     result = rowArr2.join('')
    //   console.log(result)
      stair+=result
      stair  += "\n"
    }
    return stair /*split("").reverse().join("")*/
}
console.log(staircase(6))
