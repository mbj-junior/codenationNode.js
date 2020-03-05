const {
    query,
    setValuesToInsert,
    setValuesToUpdate
  } = require('../../db')
  
  const students = {
    findAll: async () => {
      const result = await query(`SELECT * FROM students_production`)
      return result
      },

    findById: async id => {
      const result = await query(`SELECT * FROM students_production WHERE id = ${id}`)
        .then(res => (res.length ? res[0] : {}))
  
      return result
    },

    create: async data => {
      const values = setValuesToInsert(data)
      const result = await query(`INSERT INTO students_production VALUES (${values})`)
  
      return result
    },
  }


module.exports = { students }