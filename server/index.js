const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')

const { MONGODB_URI, SECRET } = require('./config/keys')
const { API_VERSION, HOST, PORT } = require('./config/app-config')

const passport = require('./services/passport')

const app = express()

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .catch(e => {
    console.log(e)
  })

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [SECRET]
}))

app.use(passport.initialize())

app.use(passport.session())

app.get('/', (req, res) => {
  res.json({ message: `Express survey application API ${API_VERSION}` })
})

require('./routes/auth-routes')(app)

app.listen(PORT, () => {
  console.log(`application server listening at ${HOST}:${PORT}`)
})
