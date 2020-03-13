const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { animals } = require('./model/')

app.use(bodyParser.json())

app.get('/v1/animals', async (req, res, next) => {
  res.status(200).send(await animals.findAll())
})

app.get('/v1/animals/:animalId', async (req, res, next) => {
  const animalIdInternal = req.params.animalId
  res.status(200).send(await animals.findByPk(animalIdInternal))
})

app.post('/v1/animals', async (req, res, next) => {
  res.status(201).send(await animals.create(req.body))
})

app.patch('/v1/animals/:animalId', async (req, res, next) => {
  const animalIdInternal = req.params.animalId

  res.status(200).send(await animals.update(req.body, {
    where: { id: animalIdInternal }
  }))
})

app.delete('/v1/animals/:animalId', async (req, res, next) => {
  const animalIdInternal = req.params.animalId

  res.sendStatus(204).send(await animals.destroy({
    where: { id: animalIdInternal }
  }))
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
