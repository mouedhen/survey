const passport = require('../services/passport')

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).json({ error: 'Unauthorized' })
}

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate(
      'google',
      {
        scope: ['profile', 'email']
      }
    ))

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
  )

  app.get('/auth/logout',
    ensureAuthenticated,
    (req, res) => {
      req.logout()
      res.redirect('/')
    }
  )

  app.get(
    '/api/current-user',
    // ensureAuthenticated,
    (req, res) => {
      res.json(req.user)
    }
  )
}
