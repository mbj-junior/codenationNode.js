'use strict'

const fs = require('fs')

const file = fs.readFileSync('/home/mbotelho/codenation/nodejs-1/data.csv').toString()

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
const q3 = () => {

    const result = []

    for(let i=0; i<20; i++){
        const a = parsedFile[i][2].split(' ')
        result.push(a[0])
    }

    console.log(result)

    return result
}

//Quem são os top 10 jogadores que ganham mais dinheiro (utilize as colunas `full_name` e `eur_wage`)?
const q4 = () => {
     const result = []

     for


     return result
    

}

//Quem são os 10 jogadores mais velhos (use como critério de desempate o campo `eur_wage`)?
const q5 = () => null

//Conte quantos jogadores existem por idade. Para isso, construa um mapa onde as chaves são as idades e os valores a contagem.
const q6 = () => null

module.exports = { q1, q2, q3, q4, q5, q6 }
