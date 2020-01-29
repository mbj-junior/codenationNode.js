const request = require('request')


function requestPromissified(url){
    return new Promise((resolve, reject) => {
        request(url, (err, response) => {
            if(err) return reject(err)

            return resolve(response)
        })
    })
}

requestPromissified('https://google.com.br')
    .then(res => res.body)
    .then(body => body.split(' ')) // está separando pelo espaço
    .then(arr => console.log(arr))
    .catch(err => console.error(err))


    