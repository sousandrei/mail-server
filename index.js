const fs = require('fs')
const { CERT, KEY, HTTPS } = require('./config')

let app = require('./config/express')()

require('https').createServer({
	cert: fs.readFileSync(CERT),
	key: fs.readFileSync(KEY)
}, app).listen(HTTPS, () => {
	/* istanbul ignore if */
	if (process.env.NODE_ENV != 'test')
		console.log('Online')
})

module.exports = app