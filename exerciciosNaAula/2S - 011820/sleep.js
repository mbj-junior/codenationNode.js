//criando um codigo sincrono usando uma função assincrono

const sleep = ms => new Promise((resolve, reject)=>{
    setTimeout(resolve, ms)
})

async function soninhoBomNumaRetaDaDutra(){
    console.log('Que soninho...')

    await sleep(5000)

    return 'Ops, dormir por 5 segundo dirigindo na Dutra'
}

soninhoBomNumaRetaDaDutra().then(console.log)

