function te(){
    let a="outer"
    console.log(`this is ${a} part of function`)
    return ()=>{
        console.log("this is inner part of function")
    }
}

// let b=te()
// b()

let set_a=new Set()
set_a=["ajay","vijay"]

// console.log(typeof set_a)

class person{
    constructor(name,mob_no,dob,yop){
        this.name=name;
        this.mob_no=mob_no;
        this.dob=dob;
        this.yop=yop;
        this.result=function(){
            console.log(`My name is ${this.name}`)
            console.log(`my date of birth is ${this.dob}`)
            console.log(`my mobile number is ${mob_no}`)
            console.log(`my year of passing is ${this.yop}`)
        }
    }
}
let ajay=new person("ajay",1999,7977223876,2021)
// ajay.result();

let arr=["ajay","vijay",["mohit","rohit",12,85]]
arr.push(["dinesh"])
arr.pop()
arr.sort()
console.log(arr)
