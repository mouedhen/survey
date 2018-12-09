module.exports = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
  MONGODB_URI: process.env.DB_URI || 'mongodb://localhost/dev',
  SECRET: 'change-me'
}
