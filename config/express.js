const express = require('express')
const bodyParser = require('body-parser')
const app = express()

module.exports = () => {
	app.use(require('compression')())

	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(bodyParser.json())

	app.use(require('method-override')())


	require('../routes/duality.js')(app)
	require('../routes/akuntsu.js')(app)
	
	app.all('*', (req, res) => { 
		res.status(404).end()
	})
	
	return app
}	