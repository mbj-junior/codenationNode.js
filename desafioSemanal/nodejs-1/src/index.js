'use strict'

const fs = require('fs')

const file = fs.readFileSync('./data.csv').toString()


const parsedFile = file
    .split('\n')
    .map(line => line.split(','))
    .slice(1)


//Quantas nacionalidades (coluna `nationality`) diferentes existem no arquivo? 
const q1 = () => {
    const result = new Set();
    
    parsedFile.forEach(line => line[14] && result.add(line[14]))

    return result.size
}
    
//Quantos clubes (coluna `club`) diferentes existem no arquivo?
const q2 = () => {
    const result = new Set();

    parsedFile.forEach(line => line[3] && result.add(line[3]))

    return result.size
}

//Liste o primeiro nome dos 20 primeiros jogadores de acordo com a coluna `full_name`.
const q3 = () => parsedFile.slice(0,20).map(line => line[2])

function compareFullName (a,b){

    return a.fname.localeCompare(b.fname)
}



//Quem são os top 10 jogadores que ganham mais dinheiro (utilize as colunas `full_name [2]` e `eur_wage [17]`)?
const q4 = () => {
     const result = []
     
     parsedFile.forEach(line => {
        if(line[17]){
            result.push({fname:line[2], eurWage:line[17]})
         }
     })

     result.sort(compareEurWage)

     let nomeDezPrimeirosSalario = [10]
     
     for(let i = 0; i<10; i++){
        nomeDezPrimeirosSalario[i] = result[i].fname
     }

     return nomeDezPrimeirosSalario
}

function compareEurWage (a,b){

    if(parseInt(a.eurWage)>parseInt(b.eurWage)){
        return -1
    } 
    if(parseInt(a.eurWage)<parseInt(b.eurWage)){
        return 1
    }
    if(parseInt(a.eurWage)===parseInt(b.eurWage)){
        return compareFullName(a,b)
    }

    return 0
}

//Quem são os 10 jogadores mais velhos (use como critério de desempate o campo `eur_wage`)?
const q5 = () => {

    const result = []
     
     parsedFile.forEach(line => {
        if(line[6]){
            result.push({fname:line[2], eurAge:line[6], eurWage:line[17]})
         }
     })

     result.sort(compareAge)

     let nomeDezPrimeirosIdade = [10]
     
     for(let i = 0; i<10; i++){
        nomeDezPrimeirosIdade[i] = result[i].fname
     }

     return nomeDezPrimeirosIdade
}



function compareAge (a,b){

    if(parseInt(a.eurAge)>parseInt(b.eurAge)){
        return -1
    } 
    if(parseInt(a.eurAge)<parseInt(b.eurAge)){
        return 1
    }
    if(parseInt(a.eurAge)===parseInt(b.eurAge)){
        return compareEurWage(a,b)
    }

    return 0
}


//Conte quantos jogadores existem por idade. Para isso, construa um mapa onde as chaves são as idades e os valores a contagem.
const q6 = () => parsedFile.reduce((acc, cur) => {
        if(cur[6]){
            acc[cur[6]]=(acc[cur[6]]||0)+1 
        }

        return acc    
    }, {})


module.exports = { q1, q2, q3, q4, q5, q6 }
