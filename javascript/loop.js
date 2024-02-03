it help to generate series of value as well as to iterate over the Array

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

for(let i =0; i<=10; i+=2){
    console.log(i)
}
0
2
4
6
8
10



for(let i = 10; i>=0; i-=2){
    console.log(i)
}
10
8
6
4
2
0

var i= 0
while(i<5){
    console.log(i)
    i++
}


var city =  ['Boston', 'Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']
for(i=0;i<city.length;i++){
    console.log(city[i])
}

Boston
VM96:3 Mumbai
VM96:3 London
VM96:3 Amsterdam
VM96:3 Helsinki
VM96:3 


var city =  ['Boston', 'Mumbai', 'London', 'Amsterdam', 'Helsinki', 'Dublin']
for(mycity of city){
    console.log(mycity)
}