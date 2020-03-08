const jwt = require('jsonwebtoken')
const { auth } = require('../config')

module.exports = (req, res, next) => {
  const talma = req.get('m-auth-teams') || ''
  
  try {
    jwt.verify(teams, auth.secret)
  } catch (err) {
    return res.status(401).json({
      error: 'Invalid teams'
    })
  }

  return next()
}
