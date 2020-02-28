const request = require('supertest')
const server = require('../src/server')
const {
  cleanDB,
  openDB,
  populateDB
} = require('./utils')

beforeAll(() => cleanDB())
afterAll(() => cleanDB())

describe('The API on /api/animals Endpoint at GET method should...', () => {
  beforeAll(() => {
    populateDB({
      "ANI1580214599567RD121": {
        "created_at": "2020-01-28T12:29:59.567Z",
        "updated_at": "2020-01-28T12:29:59.567Z",
        "pet_name": "Belchior Fernandes Montalvão",
        "description": "Gatinho mais fofinho desse mundo",
        "animal_type": "Gato",
        "pet_age": "6 Meses",
        "sex": "Macho",
        "color": "Branco Malhado",
        "image_url": ""
      },
      "ANI1580216220549RD493": {
        "created_at": "2020-01-28T12:57:00.550Z",
        "updated_at": "2020-01-28T12:57:00.550Z",
        "pet_name": "Tereza Fernandes Montalvão",
        "description": "Gatinha mais perfeita desse mundão redondo",
        "animal_type": "Gato",
        "pet_age": "6 Meses",
        "sex": "Fêmea",
        "color": "Malhada",
        "image_url": ""
      }
    })
  })

  afterAll(() => cleanDB())

  test(`return 200 as status code and have 'total' and 'data' as properties`, async () => {
    expect.assertions(2)

    const res = await request(server.app).get('/api/animals')

    expect(res.statusCode).toEqual(200)
    expect(Object.keys(res.body)).toMatchObject([
      'total',
      'data'
    ])
  })

  test('return the right number of items and an object with all items', async () => {
    expect.assertions(2)

    const res = await request(server.app).get('/api/animals')

    expect(res.body.total).toEqual(2)
    expect(typeof res.body.data).toBe('object')
  })

  test(`return the 'data' property with all items from DB`, async () => {
    expect.assertions(1)

    const res = await request(server.app).get('/api/animals')

    expect(res.body).toMatchObject({
      total: 2,
      data: {
        "ANI1580214599567RD121": {
          "created_at": "2020-01-28T12:29:59.567Z",
          "updated_at": "2020-01-28T12:29:59.567Z",
          "pet_name": "Belchior Fernandes Montalvão",
          "description": "Gatinho mais fofinho desse mundo",
          "animal_type": "Gato",
          "pet_age": "6 Meses",
          "sex": "Macho",
          "color": "Branco Malhado",
          "image_url": ""
        },
        "ANI1580216220549RD493": {
          "created_at": "2020-01-28T12:57:00.550Z",
          "updated_at": "2020-01-28T12:57:00.550Z",
          "pet_name": "Tereza Fernandes Montalvão",
          "description": "Gatinha mais perfeita desse mundão redondo",
          "animal_type": "Gato",
          "pet_age": "6 Meses",
          "sex": "Fêmea",
          "color": "Malhada",
          "image_url": ""
        }
      }
    })
  })
})

test('The API on /api/animals/:id Endpoint at GET method should...', async () => {
  expect.assertions(2)

  const res = await request(server.app).get('/api/animals/ANI1580214599567RD121')
  
  expect(res.statusCode).toEqual(200)
  expect(res.body).toMatchObject( {
    "created_at": "2020-01-28T12:29:59.567Z",
    "updated_at": "2020-01-28T12:29:59.567Z",
    "pet_name": "Belchior Fernandes Montalvão",
    "description": "Gatinho mais fofinho desse mundo",
    "animal_type": "Gato",
    "pet_age": "6 Meses",
    "sex": "Macho",
    "color": "Branco Malhado",
    "image_url": ""
  })
})


test('The API on /api/animals Endpoint at POST method should...', async () => {

  expect.assertions(2)

  const res = await request(server.app)
    .post('/api/animals')
    .send(
      {
        pet_name: 'String',
        description: 'String',
        animal_type: 'String',
        pet_age: 'String',
        sex: 'String',
        color: 'String',
        image_url: 'String'
      }
    )
  
  expect(res.statusCode).toEqual(201)
  expect(typeof res.body).toEqual('object')
})

test('The API on /api/animals/:id Endpoint at PATCH method should...', async() => {

  

})

test('The API on /api/animals/:id Endpoint at DELETE method should...', async () => {
  // Insira os cenários de teste para esse endpoint aqui!
  // Arrebenta! :) 
})
