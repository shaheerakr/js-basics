let name = 'shaheer'

let greatings = `hello my name is ${name.split("").reverse().join("")}`;
console.log(greatings);
function hello(value)
{
    return `hello ${value}`;
}
const lit = `${hello("world")}`;
console.log(lit);
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
let produce = fruits.concat(vegetables);
console.log(...produce);
produce = [fruits, vegetables];
console.log(...produce);    //this returns two arrays of fruits and vegtables
produce = [...fruits, ...vegetables];
console.log(...produce);    

const order = [20.17,18.67,1.50,"cheese","eggs","milk","bread"];

function rest(x,y,z,...order){
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(order)
}

rest(20.17,18.67,1.50,"cheese","eggs","milk","bread")

const [total,subtotal,tax,...items] = order;
console.log(total,subtotal,tax,items)

function sum(...nums){
    let total = 0;
    for(const num of nums)
    {
        total+= num
    }
    return total
}

console.log(sum(1,2,3,4,5))



function average(...nums){
    let total = 0
    for (const num of nums)
    {
        total+=num 
    }
    let avg = total/nums.length
    return avg? avg:0
}

console.log(average(2,6))
console.log(average())

const numbers = [1,2,3,4,5].forEach(function (value,index,array) {
    return console.log(value,index,array.length)     
  })

const sq = [1,2,3,4,5].forEach(function (value) {
    return console.log(value*value)     
  })
  let colors = ['Red', 'Green', 'Blue']
let values = colors.map(function(color){
    return color
})
console.log(...values);
let len = ["shaheer","javeria","qandeel"].reduce((acc,val)=>console.log(acc+val.length),0)
console.log(len)


