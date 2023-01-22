`Assignment One
1. ShamsTIIDELAB
Write a program that uses console.log to print all the numbers from 1 to 200, with two exceptions.
For numbers divisible by 6, print "Shams" instead of the number, and for numbers divisible by 8 (and
not 6), print "TIIDELAB" instead. When you have that working,

modify your program to print "ShamsTIIDELAB" for numbers that are divisible by both 6 and 8 (and still print "Shams" or
"TIIDELAB" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out a significant percentage of
programmer candidates. So if you solved it, your labour market value just went up.)
`

// SOLUTION
// 1. ShamsTIIDELAB
// For numbers divisible by 6, print "Shams" instead of the number, and for numbers divisible by 8 (and not 6),
// print "TIIDELAB" instead. When you have that working,
 var num = 1
while (num <= 200){
    if(num % 6 == 0){
        console.log('Shams')
    }else if(num % 8 == 0 && num % 6 != 0){
        console.log('TIIDELAB')
    }else{
    console.log(num)
    }
    num++
}

console.log("------------------------------------MODIFIED CODE-----------------------------------------------------------")
// modify your program to print "ShamsTIIDELAB" for numbers that are divisible by both 6 and 8 (and still print "Shams" or
// "TIIDELAB" for numbers divisible by only one of those).
var num = 1
while (num <= 200){
    if(num % 8 == 0 && num % 6 == 0){
        console.log('ShamsTIIDELAB')
    }else if(num % 6 == 0){
        console.log('Shams')
    }else if(num % 8 == 0 && num % 6 != 0){
        console.log('TIIDELAB')
    }
    else{
    console.log(num)
    }
    num++
}

console.log("End process")