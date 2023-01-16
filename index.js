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

console.log(typeof set_a)