const Math = (a, b) =>{
    if(typeof a == 'number' && typeof b == 'number'){
        console.log(`${a} + ${b} = ${a+b}\n${a} - ${b} = ${a-b}\n${a} * ${b} = ${a*b}\n${a} / ${b} = ${a/b}`)
    }else {
        console.log("This is not a Number")
    }
}

Math(4,6)