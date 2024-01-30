function doSomething(fn){
    console.log("do something")
}

function eat(){
    console.log("eat")
    return 10;
}

function sleep(){
    console.log("sleep")
    return 20;
}

// doSomething(eat)
// doSomething(eat())
// doSomething(sleep)

// ------------------------------------------------

let obj = {
    doSomething: function(fn){
       fn()
    },
    doSomething2: function(fn){
        console.log("do hello")
        fn()
        }
}


function print(){
    console.log("print")
}
obj.doSomething(print)
obj.doSomething2(print)

