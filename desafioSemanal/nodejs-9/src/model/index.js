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

    update: async (data, id) => {
      const values = setValuesToUpdate(data)
      const result = await query(`UPDATE students_production SET ${values} WHERE id = ${id}`)
  
      return result
    },

    delete: async id => await query(`DELETE FROM students_production WHERE id = ${id}`)
  }


module.exports = { students }