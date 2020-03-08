const { NODE_ENV } = process.env
const table = `students_${NODE_ENV}`

const model = require('../model')['students']

const { insertFormatter, queryHelper, updateFormatter } = require('../../db/helper')

const getAll = async (request, response) => {
  const data = await model.findAll({})

  response.status(200).json(data)
}

const getById = async (request, response) => {
  const studentId = request.params.studentId
  const data = await model.findById(studentId)

  response.status(200).json([data])
}

const create = async (request, response) => {
  const result = await model.create(request.body)
  if(result){
    response.status(201).json({
      success: 'A new record has been created.'
    })
  }

}

const updateById = async (request, response) => {
  const studentId = request.params.studentId
  const result = await model.update(request.body, studentId)
  if(result){
    response.status(200).json({
      success: 'The record has been updated.'
    })
  }

}

const deleteById = async (request, response) => {
  const studentId = request.params.studentId
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
