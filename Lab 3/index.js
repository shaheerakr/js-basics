let positions = ['sona','babu','soft','gaditek']

document.getElementById('head1').innerHTML = positions.length

positions = positions.concat(['axiom','nisum','panacolud'])

for (i in positions)
{
	console.log(positions[i])
}

shor = positions.slice(2,3)
console.log(shor)
// positions.splice(0,3,...['node','careem'])
console.log(positions)

let babu = 'babusoft'

arr = babu.split('')
console.log(arr)
arr.sort()
console.log(arr)
console.log(positions)
console.log(positions.includes('soft',0))
console.log(positions.indexOf('soft',0))


if(positions.includes('soft'))
{
	console.log('hello')
}
else
{
	console.log('....')
}
if(positions.includes('soft',4))
{
	console.log('hello')
}
else
{
	console.log('....')
}

let colors = new Set();

colors.add('blue')
colors.add('yellow')
colors.add('green')
colors.add('red')

console.log(colors)
console.log(colors.values())

iterator = colors.values()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

for (const color of colors)
{
	console.log(color)
}
for (i in colors)
{
	console.log(i)
}
const emp = new Map()
console.log(emp) 

emp.set('hello',{
	firstname:'shaheer',
	lastname:'akram'
}
)
console.log(emp)

const members = new Map();
members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);
console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

for (member of members)
{
	console.log(member[1])
	console.log(member)
}

function hello()
{
	console.log('hello world')
}
hello()
const func = function()
{
	let one = 'babusoft'
	return one
}
name =func()
console.log(name)

function mean(a,b,c)
{
	return (a+b+c)/3
}
console.log(mean(1,2,3))

function arg()
{
	return arguments
}
ar = arg('hello','world',[1,2,3])
console.log(ar)

function rest(...args)
{
	return args
}













