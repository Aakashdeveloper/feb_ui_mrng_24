Es5 > Ecma Script
Es6 > Ecma Script

/////////
Datatypes
> String = "Hii" 'hey' `test` "10" '11' "true" 'false'
> Number = 10 24424 24.24 .242
> Boolean = true false


//es5
var a = 10
var b = "Hii"
var c = true

typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'
var d = "10"
undefined
typeof(d)
'string'
var e = 10.332
undefined
typeof(e)
'number'
var f = `true`
undefined
typeof(f)
'string'

var a = 10
undefined
var b = 5
undefined
a+b (addition)
15
a-b
5
a*b
50
a/b
2
a%b
0
4%2
0
4%3
1
2%4
2
3%4
3

//////
var a = "Hii"
var b = "JavaScript"

a+b (concat)
'HiiJavaScript'
a-b
NaN (Not a number)
a*b
NaN
a/b
NaN
a-1
NaN

string +string = string
string +number = string
number +string = string
number + number = number
 
10 +"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"10"+20+30
"1020"+30
'102030'

10+"20"+30-1
102029

10+20+"30"-1
3029

"10"+20+30-1
102029

"a"-1
NaN
"10"-1
9
4*"2"
8
"3"/"2"
1.5
"10a"-1
NaN
4 *"2c"
NaN
"3i"*"2d"
NaN

var a = true
var b = false
a+b
1
true+true
2
true-false
1

true is equal to 1
false is equal to 0

10+true
11
5/false
Infinity