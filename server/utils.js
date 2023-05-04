const jwt = require('jsonwebtoken')

const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const authenticateToken = (req, res, next) => {
  // Get access token from header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  
  if (token == null) return res.sendStatus(401)
  // Verify access token
  jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {
    if (err) return res.sendStatus(403)
    req.user = {
      username: decodeToken.username,
      email: decodeToken.username
    }
    next()
  })
}

module.exports = {
  createToken,
  authenticateToken
}
