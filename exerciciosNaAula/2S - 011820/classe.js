function Door (name){
    this.name = name
}

Door.prototype.open = function() {
    return console.log(`A porta se abriu, ${this.name}`)
}

const porta = new Door('Wil')
const janela = new Door('Carla')

porta.open()
janela.open()