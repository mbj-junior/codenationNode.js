//exemplo 1
const request = require('request')

function cb (err,res){
    console.log({res})
}

request('https://google.com.br',cb)




//exemplo 2
const request = require ('request')

request('https://google.com.br', (error, response) => {
    if (error) {
        return console.error(error)
    }

    console.log(response)

})