const { NODE_ENV } = process.env
const table = `students_${NODE_ENV}`

const model = require('../model')['students']

// Deixamos esses helpers para ficar mais fácil escrever as queries e executálas de formas assíncrona. 🚀 
const { insertFormatter, queryHelper, updateFormatter } = require('../../db/helper')

const getAll = async (request, response) => {
  // Implemente o método correspondete a rota GET /v1/students

  const data = await model.findAll({})

  response.status(200).json({
    total: data.length,
    data
  })
}

const getById = async (request, response) => {
  // Implemente o método correspondete a rota GET /v1/students/:id
}

const create = async (request, response) => {
  // Implemente o método correspondete a rota POST /v1/students
}

const updateById = async (request, response) => {
  // Implemente o método correspondete a rota PATCH /v1/students/:id
}

const deleteById = async (request, response) => {
  // Implemente o método correspondete a rota DELETE /v1/students/:id
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}
