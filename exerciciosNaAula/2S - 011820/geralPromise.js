const request = require('request')

const rp = url => new Promise((resolve, reject) => {
    request(url, (err, response) => {
        if (err) return reject(err)

        return resolve(response)
    })
})


async function bateNoGoogle() {
    let res

    try {
        res = await rp('https://google.com')
    } catch (err) {
        console.error(err)
    }

    return res.body
}

bateNoGoogle().then(console.log)