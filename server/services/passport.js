const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../config/keys')

const User = require('../models/user')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((userID, done) => {
  User.findById(userID)
    .then(user => {
      done(null, user)
    })
    .catch(e => {
      done(e, false)
    })
})

// passport google strategy config
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleID: profile.id })
      if (!user) {
        user = new User({ googleID: profile.id })
        await user.save()
      }
      return done(null, user)
    } catch (e) {
      return done(e, false)
    }
  })
)

module.exports = passport
