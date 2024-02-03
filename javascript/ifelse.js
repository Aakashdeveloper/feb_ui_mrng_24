if(condition){
    //do something
}else{
    //do something
}

var a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even
undefined
var a = 11
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM1825:5 Number 11 is odd


var a = 15
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else if(a%3 == 0){
    console.log(`Number ${a} is divisble by 3`)
}else{
    console.log(`Number ${a} is odd`)
}

Number 15 is divisble by 3

/////////Ternary
> use where we have only one condition

condition ? "if condition is true":"if condition is false"

let ae = 20
ae > 20 ? "Hii":"Bie"

let ae = 19
ae > 20 ? "Hii":"Bie"
'Bie'
let ae = 21
ae > 20 ? "Hii":"Bie"
'Hii'
let ae = 21
ae > 20 ? a+1:a-1
16
let ae = 21
ae > 20 ? ae+1:ae-1
22
let ae = 19
ae > 20 ? ae+1:ae-1
18