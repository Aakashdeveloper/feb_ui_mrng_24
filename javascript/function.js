var a = 10
var b = 20
a+b
30

/////////
keyword nameoffunction(parameters){
    return value
}

function add(a,b){
    return a+b
}

add(3,5)
8
add(4,8)
12
add("Hii","Test")
'HiiTest'
add(3)
NaN
add(3,1,1)
4

function isEven(userInput){
    let out = ''
    if(userInput%2 == 0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(5)
'Number 5 is odd'
isEven(4)
'Number 4 is even'

//es6
let add = (a,b) => {return a+b}
add(2,3)
5
add(9,222)
231



//////////
function add(...args){
    console.log(args)
    let out = 0;
    for(data of args){
        out += data
    }
    return out
}

