//const nextname = ['shaheer','asad','saadat'].map(name => name.toUpperCase());
//console.log(uperName)
let name = ['afghanistan','qandeel','saim','yasir'].filter(name =>name.length>6);

const squares = [1,2,3,4,5,6,7,8,9,10].reduce((a,b)=>a+b);

 name = "shaheer"
const lastName = "akram"
let fullName ={
    name : name,
    lastName :lastName
}
console.log(fullName)

const log = console.log
log('shaheer')
fullName = {name,lastName,
    func : function(){
        log("hello world")
    }
}
console.log(fullName)
fullName.func()

log(name in fullName)

const keys = Object.keys(fullName)
log(keys)
for (let key  of Object.keys(fullName))
{
    console.log(key)
}
fullName.city = "karachi"

for (let [keys,val] of Object.entries(fullName))
{
    console.log(keys,val)
}

let a = 2
let b = a

log(b)
b = 3
log(a)
log(b)

const myCity ={
    name : "karachi",
    fun : () => log(this.name)
}
log(myCity)
const cloneCity = {...myCity}
log(cloneCity)
cloneCity.name = "hyd"
log(myCity)
log(cloneCity)

myCity.fun()



