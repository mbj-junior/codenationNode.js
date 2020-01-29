'use strict'

const fibonacci = (num) => {
    let numeroFibo = []
    numeroFibo[0]=0
    numeroFibo[1]=1
    
    for (let i = 2;; i++) {
        numeroFibo[i] = numeroFibo[i-2]+numeroFibo[i-1]
            if (numeroFibo[i]>350)
            break
    }
    return numeroFibo
}

const isFibonnaci = (num) =>{

    return fibonacci().indexOf(num) > 0
} 

module.exports = {
    fibonacci,
    isFibonnaci
}


console.log(fibonacci())
console.log(isFibonnaci(4))
console.log(isFibonnaci(5))
