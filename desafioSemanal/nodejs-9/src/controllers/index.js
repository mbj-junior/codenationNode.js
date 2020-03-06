const { NODE_ENV } = process.env
const table = `students_${NODE_ENV}`

const model = require('../model')['students']

// Deixamos esses helpers para ficar mais fácil escrever as queries e executálas de formas assíncrona. 🚀 
const { insertFormatter, queryHelper, updateFormatter } = require('../../db/helper')

const getAll = async (request, response) => {
  // Implemente o método correspondete a rota GET /v1/students
  const data = await model.findAll({})

  response.status(200).json(data)
}

const getById = async (request, response) => {
  // Implemente o método correspondete a rota GET /v1/students/:id
  const { studentId } = request.params
  const data = await model.findById(studentId)

  response.status(200).json([data])
}

const create = async (request, response) => {
  // Implemente o método correspondete a rota POST /v1/students
  const result = await model.create(request.body)
  if(result){
    response.status(201).json({
      success: 'A new record has been created.'
    })
  }

}

const updateById = async (request, response) => {
  // Implemente o método correspondete a rota PATCH /v1/students/:id
  const { studentId } = request.params
  const result = await model.update(request.body, studentId)
  if(result){
    response.status(200).json({
      success: 'The record has been updated.'
    })
  }

}

const deleteById = async (request, response) => {
  // Implemente o método correspondete a rota DELETE /v1/students/:id
  const { studentId } = request.params
  const result = await model.delete(studentId)

  response.status(204).json({ result })
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}
