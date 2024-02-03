array is the collection of homogeneous datatype 

var a = [1,3,4,5,3,54,46,64] //array of number
var b = ["sdvs","ffd","few","Efedv"]//array of string
var c = [true,true,false,true] // array of boolean

var d = [2432,true,"dsd",234,34,343,"dg"] 

var city = ["Delhi","Mumbai","London","Amsterdam"]

city.length
4
city.push("Helsinki")
5
city
(5) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Helsinki']
city.push("Dublin")
6
city
(6) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']
city.pop()
'Dublin'

['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Helsinki']
city.pop(2)

city.pop(2)
'Helsinki'
city
(4) ['Delhi', 'Mumbai', 'London', 'Amsterdam']
city.pop(200)
'Amsterdam'
city
(3) ['Delhi', 'Mumbai', 'London']
var city = ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']
undefined
city.shift()
'Delhi'
city.unshift('Boston')
6
city
(6) ['Boston', 'Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']

push > add at the end of array
unshift > Add in the beginning of array
pop > remove the last value
shift > remove the first value

var a =  ['Boston', 'Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']
undefined
a.slice(1)
(5) ['Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']
a.slice(2)
(4) ['London', 'Amsterdam', 'Helsinki', 'Dublin']
a.slice(2,5)
(3) ['London', 'Amsterdam', 'Helsinki']
a.slice(1,3)
(2) ['Mumbai', 'London']

splice(index,delete count, value)


// remove one value from index number 2
var city =  ['Boston', 'Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']
city.splice(2,1)

// add 2 value on index number 4
city.splice(4,0,'Hongkong','Indore')

// on index 3 remove 1 value and add 2
city.splice(3,1,'Venice','Dubai')


var city =  ['Boston', 'Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']
city.splice(2,1)
['London']

city
(5) ['Boston', 'Mumbai', 'Amsterdam', 'Helsinki', 'Dublin']
city.splice(4,0,'Hongkong','Indore')
[]
city
(7) ['Boston', 'Mumbai', 'Amsterdam', 'Helsinki', 'Hongkong', 'Indore', 'Dublin']
city.splice(3,1,'Venice','Dubai')
['Helsinki']
city
(8) ['Boston', 'Mumbai', 'Amsterdam', 'Venice', 'Dubai', 'Hongkong', 'Indore', 'Dublin']


var city =  ['Boston', 'Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']

city.indexOf('Pune')
-1
city.indexOf('Boston')
0
city.indexOf('Helsinki')
4
city.indexOf('Delhi')
-1


var a = [1,2,3,4]
var b = ['a','b','c','d']
a+b
'1,2,3,4a,b,c,d'
a.concat(b)
[1, 2, 3, 4, 'a', 'b', 'c', 'd']

//spread
[...a,...b]
[1, 2, 3, 4, 'a', 'b', 'c', 'd']


var a = [1,2,3,4]
var b = ['a','b',...a,'c','d']