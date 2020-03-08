const request = require('supertest')
const { app } = require('../src/server.js')

const { populateTable, cleanTable, connection } = require('./utils')

beforeAll(() => cleanTable('students_test'))

beforeEach(() => {
  populateTable('students_test', {
    'name': 'nomeTeste',
    'surname': 'sobrenomeTeste',
    'email': 'teste@gmail.com',
    'age': 11,
    'gender': 'Masculino',
    'class': 'Node.js',
    'is_employed': false,
    'city': 'cidadeTeste'
  })
})

afterEach(() => cleanTable('students_test'))

afterAll(() => connection.end())

describe('GET /v1/students should', () => {
  test('Retorna todos estudantes', async () =>{
    const response = await request (app).get('/v1/students')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual([{
      id: 1,
      name: 'nomeTeste',
      surname: 'sobrenomeTeste',
      email: 'teste@gmail.com',
      age: 11,
      gender: 'Masculino',
      class: 'Node.js',
      is_employed: false,
      city: 'cidadeTeste'
    }])
  })
})

describe('GET /v1/students/:id should', () => {
  test('Retorna todos estudantes', async () =>{
    const response = await request (app).get('/v1/students')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual([{
      id: 1,
      name: 'nomeTeste',
      surname: 'sobrenomeTeste',
      email: 'teste@gmail.com',
      age: 11,
      gender: 'Masculino',
      class: 'Node.js',
      is_employed: false,
      city: 'cidadeTeste'
    }])
  })
})

describe('POST /v1/students should', () => {
  test('create a new occurence', async () => {
    const response = await request(app)
      .post('/v1/students')
      .send({
        name: 'nomeTestePOST',
        surname: 'sobrenomeTestePOST',
        email: 'testePOST@gmail.com',
        age: 11,
        gender: 'Masculino',
        class: 'Node.jsPOST',
        is_employed: false,
        city: 'cidadeTestePOST'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(201)
    expect(response.body).toMatchObject({
      success: 'A new record has been created.'
    })

    const updatedData = await request(app).get('/v1/students/2')

    expect(updatedData.body[0]).toEqual({
      id: 1,
      name: 'nomeTeste2',
      surname: 'sobrenomeTeste2',
      email: 'teste@gmail.com2',
      age: 11,
      gender: 'Masculino',
      class: 'Node.js2',
      is_employed: false,
      city: 'cidadeTeste2'
    })
  })
})

describe('PATCH /v1/students/:id should', () => {
  test('update occurrence based on id', async () => {
    const response = await request(app)
      .patch('/v1/students/1')
      .send({
        name: 'TesteTeste',
        surname: 'testado',
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(200)
    expect(response.body).toMatchObject({
      success: 'The record has been updated.'
    })

    const updatedData = await request(app).get('/v1/students/1')

    expect(updatedData.body[0].name).toBe('nomeTeste')
    expect(updatedData.body[0].surname).toBe('sobrenomeTeste')
  }) 
})

describe('DELETE /v1/students/:id should', () => {
    test('delete occurrence based on id', async () => {
    const response = await request(app)
    .delete('/v1/students/1')

    expect(response.statusCode).toBe(204)
  })
})
