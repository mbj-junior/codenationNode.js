class Carro{
/*
    constructor({modelo}){
        this.modelo = modelo
    } 
*/

    acelerar(){
        return `acelerando o meu ${this.modelo}`
    }

    frear(){
        return `freando o meu ${this.modelo}`
    }
}


class MeuCarro extends Carro{
    constructor(){
        super()
        this.modelo = 'Nissan Kicks'
    }
}

const teste = new MeuCarro()

console.log(teste.acelerar())
console.log(teste.frear())

