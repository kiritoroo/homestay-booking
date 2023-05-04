const jsonServer = require('json-server')
const auth = require('json-server-auth')
const {
  createToken,
  authenticateToken
} = require('./utils')
const dotenv = require('dotenv')

dotenv.config()
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(auth);
server.use('/api/me', authenticateToken)

server.get('/api/users', (req, res) => {
  const users = router.db.get('users')
  res.json({ success: true, users })
})

server.post('/api/login', (req, res) => {
  const { username, password } = req.body
  const user = router.db.get('users').find({ username }).value()

  if (user) {
    const token = createToken({ username: user.username, email: user.email })
    res.cookie('access_token', token, { httpOnly: false, maxAge: 3600 * 1000 });
    
    res.json({
      user: {
        username: user.username,
        email: user.email,
        full_name: user.full_name,
        phone: user.phone,
        created_at: user.created_at,
        password_changed_at: user.password_changed_at
      },
      access_token: token,
      access_token_expires_at: Date.now() + 3600 * 1000
    })
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
})

server.get('/api/me', (req, res) => {
  const { username, email } = req.user
  const user = router.db.get('users').find({ username }).value()
  res.json({
    data: {
      username: user.username,
      email: user.email,
      full_name: user.full_name,
      phone: user.phone,
      created_at: user.created_at,
      password_changed_at: user.password_changed_at
    }
  })
})

server.listen(3000, () => {
  console.log('JSON Server is running')
})