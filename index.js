const { PORT } = require('./config/config')

let app = require('./config/express')()

require('http').createServer(app).listen(PORT, () => {
	/* istanbul ignore if */
	if (process.env.NODE_ENV != 'test')
		console.log(`Online ${PORT}`)
})

module.exports = app