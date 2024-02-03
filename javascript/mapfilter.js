Map
> map is ise to iterate over the Array
> it always return the same length of output array as input
> it is use to apply logic


var a = [4,56,9,11,7,34,16,23,9,6,18,27]

a.map((data) => {return data*2})
[8, 112, 18, 22, 14, 68, 32, 46, 18, 12, 36, 54]

filter
> filter is use to filter out the value
> it may or may not return same length of output array as input
> it only return those for which condition is true

var a = [4,56,9,11,7,34,16,23,9,6,18,27]
a.filter((data) => {return data>20})
[56, 34, 23, 27]