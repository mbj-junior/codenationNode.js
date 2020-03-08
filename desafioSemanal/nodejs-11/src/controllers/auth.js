const jwt = require('jsonwebtoken')
const { auth } = require('../config')

let Auth = {}

Auth.getToken = async (req, res, next) => {
  const data = req.body

  if (auth.user !== data.user ||
    auth.password !== data.password){
      
      return res
      .status(401)
      .json({error: 'Login ou senha invalidos'})
  }

  const identifier = data.user + (new Date()).getTime()
  const token = jwt.sign({ data: identifier}, auth.secret, {expiresIn: '1h'})

  
  return res.status(200).json({token})
}

module.exports = Auth
