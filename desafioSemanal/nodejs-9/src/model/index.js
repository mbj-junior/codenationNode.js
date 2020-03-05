const {
    query,
    setValuesToInsert,
    setValuesToUpdate
  } = require('../../db')
  
  const students = {
    findAll: async () => {
      const result = await query(`SELECT * FROM students_production`)
      return result
    }

}

module.exports = { students }