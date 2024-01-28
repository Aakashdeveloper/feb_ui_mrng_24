var a = "10"
var b = "5"
a+b
'105'

parseInt(a)+parseInt(b)
15
parseInt(a+b)
105
var a = "10.11"
var b = "5.41"
undefined
parseInt(a)+parseInt(b)
15
parseFloat(a)+parseFloat(b)
15.52
Number(a)+Number(b)
15.52

//////
** All the comparison operator will always return boolean output

= //assignment
== // compare the data
=== // compare the data and datatype


var a = 10 //assignment
var b = "10"

a == b //compare only data
true
a === b //compare data and datatype
false

a > b
false
a< b
false
a !== b
true
a >= b
true
a <= b
true
a => b
a => b