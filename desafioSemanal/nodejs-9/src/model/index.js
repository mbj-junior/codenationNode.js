const {
    query,
    setValuesToInsert,
    setValuesToUpdate
  } = require('../../db')

  const { NODE_ENV = "production" } = process.env
  const table = `students_${NODE_ENV}`
  
  const students = {
    findAll: () => new Promise((resolve) => {
      const result = query(`SELECT * FROM ${table}`)
      return resolve(result)
    }),

    findById: async id => {
      const result = await query(`SELECT * FROM ${table} WHERE id = ${id}`)
        .then(res => (res.length ? res[0] : {}))
  
      return result
    },

    create: async data => {
      const values = setValuesToInsert(data)
      const result = await query(`INSERT INTO ${table} VALUES (${values})`)
  
      return result
    },

    update: async (data, id) => {
      const values = setValuesToUpdate(data)
      const result = await query(`UPDATE ${table} SET ${values} WHERE id = ${id}`)
  
      return result
    },

    delete: async id => await query(`DELETE FROM ${table} WHERE id = ${id}`)
  }


module.exports = { students }