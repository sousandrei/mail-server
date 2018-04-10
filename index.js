require('dotenv').config()

const { PORT } = process.env

let app = require('./config/express')()

require('http').createServer(app).listen(PORT, () =>
	console.log(`Online ${PORT}`))

module.exports = app