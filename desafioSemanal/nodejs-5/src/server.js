const express = require('express')
const app = express()

let content = require('../imdb-movies.json')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pecorrer (lista, diretor){
    let i=0;
    while(i<lista.length){
        if(lista[i].Director === diretor){
            return lista[i].Title
        }
        i++;
    }
}

app.get('/v1/movie', async (req, res, next) => {
  let randomico= getRandomIntInclusive(0,content.length-1);
  res.status(200).send(
    {"director":content[randomico].Director,"movie":content[randomico].Title}
  )
})

app.get('/v1/movie/:director', async (req, res, next) => {
  res.status(200).send(

    {"director":req.params.director,"movie":pecorrer(content,req.params.director)}
    
  )
})

const start = async (port = 8080) => {
  app.listen(port, function () {
    console.info('%s listening at port %s', app.name, port)
  })
}

const stop = () => {
  app.close(() => {
    console.info('App Stopped')
  })
}

module.exports = {
  app,
  start,
  stop
}
